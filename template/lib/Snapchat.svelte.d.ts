/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SnapchatProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Snapchat extends SvelteComponentTyped<
  SnapchatProps,
  {},
  { default: {} }
> {}
