/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ScrewdriverProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Screwdriver extends SvelteComponentTyped<
  ScrewdriverProps,
  {},
  { default: {} }
> {}
