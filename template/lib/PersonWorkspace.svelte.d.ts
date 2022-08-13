/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonWorkspaceProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonWorkspace extends SvelteComponentTyped<
  PersonWorkspaceProps,
  {},
  { default: {} }
> {}
