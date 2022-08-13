/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BellSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BellSlash extends SvelteComponentTyped<
  BellSlashProps,
  {},
  { default: {} }
> {}
