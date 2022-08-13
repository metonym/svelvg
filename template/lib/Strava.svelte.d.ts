/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StravaProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Strava extends SvelteComponentTyped<
  StravaProps,
  {},
  { default: {} }
> {}
