/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelegramProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Telegram extends SvelteComponentTyped<
  TelegramProps,
  {},
  { default: {} }
> {}
