/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

// Import sub-components
import "./lib/playlist-track.js";
import "./lib/playlist-dots.js";
import "./lib/playlist-card.js";
import "./lib/playlist-controls.js";

/**
 * `playlist-project`
 * 
 * @demo index.html
 * @element playlist-project
 */
export class PlaylistProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-project";
  }

  constructor() {
    super();
    this.title = "";
    this.index = 0;
    this.items = [];
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      index: { type: Number },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--playlist-project-label-font-size, var(--ddd-font-size-s));
      }
      .playlist-stage {
        overflow: hidden;
        position: relative;
      }
    `];
  }

  // Handle dot click event bubbling up (Unidirectional Data Flow)
  indexChanged(e) {
    this.index = e.detail.index;
  }

  render() {
    return html`
      <div class="wrapper">
        <h3><span>${this.t.title}:</span> ${this.title}</h3>
        <div class="playlist-stage">
          <slot></slot>
        </div>
        <playlist-controls 
          index="${this.index}"
          @play-list-index-changed="${this.indexChanged}">
        </playlist-controls>
        <playlist-dots 
          index="${this.index}"
          @play-list-index-changed="${this.indexChanged}">
        </playlist-dots>
      </div>
    `;
  }
}

globalThis.customElements.define(PlaylistProject.tag, PlaylistProject);