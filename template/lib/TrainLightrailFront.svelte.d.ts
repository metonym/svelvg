/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrainLightrailFrontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TrainLightrailFront extends SvelteComponentTyped<
  TrainLightrailFrontProps,
  {},
  { default: {} }
> {}
