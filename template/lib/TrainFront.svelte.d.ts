/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrainFrontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TrainFront extends SvelteComponentTyped<
  TrainFrontProps,
  {},
  { default: {} }
> {}
