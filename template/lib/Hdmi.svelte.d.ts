/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HdmiProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hdmi extends SvelteComponentTyped<
  HdmiProps,
  {},
  { default: {} }
> {}
