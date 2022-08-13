/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GearWideProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GearWide extends SvelteComponentTyped<
  GearWideProps,
  {},
  { default: {} }
> {}
