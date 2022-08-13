/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldSlash extends SvelteComponentTyped<
  ShieldSlashProps,
  {},
  { default: {} }
> {}
