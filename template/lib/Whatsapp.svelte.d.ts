/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WhatsappProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Whatsapp extends SvelteComponentTyped<
  WhatsappProps,
  {},
  { default: {} }
> {}
