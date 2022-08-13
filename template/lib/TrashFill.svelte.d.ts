/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TrashFill extends SvelteComponentTyped<
  TrashFillProps,
  {},
  { default: {} }
> {}
