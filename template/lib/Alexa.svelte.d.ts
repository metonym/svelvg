/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlexaProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Alexa extends SvelteComponentTyped<
  AlexaProps,
  {},
  { default: {} }
> {}
