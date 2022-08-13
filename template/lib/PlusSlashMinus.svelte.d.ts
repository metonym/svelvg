/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusSlashMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusSlashMinus extends SvelteComponentTyped<
  PlusSlashMinusProps,
  {},
  { default: {} }
> {}
