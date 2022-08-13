/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ServerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Server extends SvelteComponentTyped<
  ServerProps,
  {},
  { default: {} }
> {}
