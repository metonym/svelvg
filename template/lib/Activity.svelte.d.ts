/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ActivityProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Activity extends SvelteComponentTyped<
  ActivityProps,
  {},
  { default: {} }
> {}
