/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Trash extends SvelteComponentTyped<
  TrashProps,
  {},
  { default: {} }
> {}
