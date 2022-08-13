/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardX extends SvelteComponentTyped<
  ClipboardXProps,
  {},
  { default: {} }
> {}
