/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InfoLg extends SvelteComponentTyped<
  InfoLgProps,
  {},
  { default: {} }
> {}
