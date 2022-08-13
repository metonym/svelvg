/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LifePreserverProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LifePreserver extends SvelteComponentTyped<
  LifePreserverProps,
  {},
  { default: {} }
> {}
