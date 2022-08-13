/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IncognitoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Incognito extends SvelteComponentTyped<
  IncognitoProps,
  {},
  { default: {} }
> {}
