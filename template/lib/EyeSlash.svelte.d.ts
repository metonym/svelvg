/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyeSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EyeSlash extends SvelteComponentTyped<
  EyeSlashProps,
  {},
  { default: {} }
> {}
