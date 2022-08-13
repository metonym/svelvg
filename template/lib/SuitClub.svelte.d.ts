/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitClubProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitClub extends SvelteComponentTyped<
  SuitClubProps,
  {},
  { default: {} }
> {}
