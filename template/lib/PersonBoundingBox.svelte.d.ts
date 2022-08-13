/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonBoundingBoxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonBoundingBox extends SvelteComponentTyped<
  PersonBoundingBoxProps,
  {},
  { default: {} }
> {}
