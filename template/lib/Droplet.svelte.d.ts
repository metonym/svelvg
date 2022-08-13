/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropletProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Droplet extends SvelteComponentTyped<
  DropletProps,
  {},
  { default: {} }
> {}
