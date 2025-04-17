import { Events } from "jscorlib";
import * as React from "react";
import * as ReactDom from "react-dom";
import * as ReactDomClient from "react-dom/client";
import { eventEmitterToEventSubscriber } from "../utils/eventEmitter";

export function initializeReactHosting(): void {
  const hostingContainer = document.createElement("div");
  document.body.appendChild(hostingContainer);
  const root = ReactDomClient.createRoot(hostingContainer);
  root.render(<React.StrictMode>
    <ReactIsland />
  </React.StrictMode>);
}

let nextReactRootNum = 0;
const hostedReactRoots = new Map<string, HostedReactRoot>();
const hostedReactRootsChangedEvent = new Events.EventEmitter();

export function createHostedReactRoot(container?: HTMLElement): ReactDomClient.Root {
  const root = new HostedReactRoot(`root-${nextReactRootNum}`, container);
  nextReactRootNum++;
  hostedReactRoots.set(root.key, root);
  setInterval(() => hostedReactRootsChangedEvent.invoke(), 0);
  return root;
}

class HostedReactRoot implements ReactDomClient.Root, Disposable {
  private _children?: React.ReactNode;
  private _childrenChangedEvent = new Events.EventEmitter();
  public constructor(public readonly key: string, public readonly container?: HTMLElement) {
  }
  public get children(): React.ReactNode | undefined {
    return this._children;
  }
  public render(children: React.ReactNode): void {
    this._children = children;
    this._childrenChangedEvent.invoke();
  }
  public unmount(): void {
    this._children = undefined;
    hostedReactRoots.delete(this.key);
  }
  public onChildrenChanged = eventEmitterToEventSubscriber(this._childrenChangedEvent);
  public [Symbol.dispose](): void {
    this.unmount();
  }
}

const ReactIsland: React.FC = () => {
  const [hostedRoots, setHostedRoots] = React.useState<readonly HostedReactRoot[]>([]);
  React.useEffect(() => {
    const d = hostedReactRootsChangedEvent.subscribe(() => {
      setHostedRoots([...hostedReactRoots.values()]);
    });
    return () => d[Symbol.dispose]();
  }, []);
  return hostedRoots.map(root => <HostedReactRootContainer key={root.key} root={root} />);
};

interface HostedReactRootContainerProps {
  root: HostedReactRoot;
}

const HostedReactRootContainer: React.FC<HostedReactRootContainerProps> = props => {
  const { root } = props;
  const [children, setChildren] = React.useState(() => root.children);
  React.useEffect(() => {
    const d = root.onChildrenChanged(() => {
      setChildren(root.children);
    });
    setChildren(root.children);
    return () => d[Symbol.dispose]();
  }, [root]);
  if (children == null) return null;
  if (root.container) return ReactDom.createPortal(children, root.container);
  return <>{children}</>;
};
