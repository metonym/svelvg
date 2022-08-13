/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudSlash extends SvelteComponentTyped<
  CloudSlashProps,
  {},
  { default: {} }
> {}
