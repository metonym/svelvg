/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UniversalAccessProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UniversalAccess extends SvelteComponentTyped<
  UniversalAccessProps,
  {},
  { default: {} }
> {}
