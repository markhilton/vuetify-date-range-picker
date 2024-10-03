(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.date-selector[data-v-28b2338d]{cursor:pointer}.date-selector .theme--dark.v-sheet[data-v-28b2338d],.date-selector .theme--light.v-sheet[data-v-28b2338d]{background-color:transparent}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-btn .v-btn__underlay{position:absolute}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled:hover{opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--slim{padding:0 8px}.v-btn--readonly{pointer-events:none}.v-btn--rounded{border-radius:24px}.v-btn--rounded.v-btn--icon{border-radius:4px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loader>.v-progress-circular{width:1.5em;height:1.5em}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn--slim .v-btn__prepend{margin-inline-start:0}.v-btn__append{grid-area:append;margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn--slim .v-btn__append{margin-inline-end:0}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-pagination .v-btn{border-radius:4px}.v-pagination .v-btn--rounded{border-radius:50%}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled)>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;user-select:none;vertical-align:middle;width:1em;min-width:1em}.v-icon--clickable{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.38}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;inset:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background,.v-progress-linear__buffer{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;width:100%;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;height:inherit;inset:0 auto 0 0;position:absolute;width:auto}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate{border-start-start-radius:0;border-end-start-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-container{width:100%;padding:16px;margin-right:auto;margin-left:auto}@media (min-width: 960px){.v-container{max-width:900px}}@media (min-width: 1280px){.v-container{max-width:1200px}}@media (min-width: 1920px){.v-container{max-width:1800px}}@media (min-width: 2560px){.v-container{max-width:2400px}}.v-container--fluid{max-width:100%}.v-container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.v-row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.v-row+.v-row{margin-top:12px}.v-row+.v-row--dense{margin-top:4px}.v-row--dense{margin:-4px}.v-row--dense>.v-col,.v-row--dense>[class*=v-col-]{padding:4px}.v-row.v-row--no-gutters{margin:0}.v-row.v-row--no-gutters>.v-col,.v-row.v-row--no-gutters>[class*=v-col-]{padding:0}.v-spacer{flex-grow:1}.v-col-xxl,.v-col-xxl-auto,.v-col-xxl-12,.v-col-xxl-11,.v-col-xxl-10,.v-col-xxl-9,.v-col-xxl-8,.v-col-xxl-7,.v-col-xxl-6,.v-col-xxl-5,.v-col-xxl-4,.v-col-xxl-3,.v-col-xxl-2,.v-col-xxl-1,.v-col-xl,.v-col-xl-auto,.v-col-xl-12,.v-col-xl-11,.v-col-xl-10,.v-col-xl-9,.v-col-xl-8,.v-col-xl-7,.v-col-xl-6,.v-col-xl-5,.v-col-xl-4,.v-col-xl-3,.v-col-xl-2,.v-col-xl-1,.v-col-lg,.v-col-lg-auto,.v-col-lg-12,.v-col-lg-11,.v-col-lg-10,.v-col-lg-9,.v-col-lg-8,.v-col-lg-7,.v-col-lg-6,.v-col-lg-5,.v-col-lg-4,.v-col-lg-3,.v-col-lg-2,.v-col-lg-1,.v-col-md,.v-col-md-auto,.v-col-md-12,.v-col-md-11,.v-col-md-10,.v-col-md-9,.v-col-md-8,.v-col-md-7,.v-col-md-6,.v-col-md-5,.v-col-md-4,.v-col-md-3,.v-col-md-2,.v-col-md-1,.v-col-sm,.v-col-sm-auto,.v-col-sm-12,.v-col-sm-11,.v-col-sm-10,.v-col-sm-9,.v-col-sm-8,.v-col-sm-7,.v-col-sm-6,.v-col-sm-5,.v-col-sm-4,.v-col-sm-3,.v-col-sm-2,.v-col-sm-1,.v-col,.v-col-auto,.v-col-12,.v-col-11,.v-col-10,.v-col-9,.v-col-8,.v-col-7,.v-col-6,.v-col-5,.v-col-4,.v-col-3,.v-col-2,.v-col-1{width:100%;padding:12px}.v-col{flex-basis:0;flex-grow:1;max-width:100%}.v-col-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-3{flex:0 0 25%;max-width:25%}.v-col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-6{flex:0 0 50%;max-width:50%}.v-col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-9{flex:0 0 75%;max-width:75%}.v-col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-12{flex:0 0 100%;max-width:100%}.offset-1{margin-inline-start:8.3333333333%}.offset-2{margin-inline-start:16.6666666667%}.offset-3{margin-inline-start:25%}.offset-4{margin-inline-start:33.3333333333%}.offset-5{margin-inline-start:41.6666666667%}.offset-6{margin-inline-start:50%}.offset-7{margin-inline-start:58.3333333333%}.offset-8{margin-inline-start:66.6666666667%}.offset-9{margin-inline-start:75%}.offset-10{margin-inline-start:83.3333333333%}.offset-11{margin-inline-start:91.6666666667%}@media (min-width: 600px){.v-col-sm{flex-basis:0;flex-grow:1;max-width:100%}.v-col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0{margin-inline-start:0}.offset-sm-1{margin-inline-start:8.3333333333%}.offset-sm-2{margin-inline-start:16.6666666667%}.offset-sm-3{margin-inline-start:25%}.offset-sm-4{margin-inline-start:33.3333333333%}.offset-sm-5{margin-inline-start:41.6666666667%}.offset-sm-6{margin-inline-start:50%}.offset-sm-7{margin-inline-start:58.3333333333%}.offset-sm-8{margin-inline-start:66.6666666667%}.offset-sm-9{margin-inline-start:75%}.offset-sm-10{margin-inline-start:83.3333333333%}.offset-sm-11{margin-inline-start:91.6666666667%}}@media (min-width: 960px){.v-col-md{flex-basis:0;flex-grow:1;max-width:100%}.v-col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-inline-start:0}.offset-md-1{margin-inline-start:8.3333333333%}.offset-md-2{margin-inline-start:16.6666666667%}.offset-md-3{margin-inline-start:25%}.offset-md-4{margin-inline-start:33.3333333333%}.offset-md-5{margin-inline-start:41.6666666667%}.offset-md-6{margin-inline-start:50%}.offset-md-7{margin-inline-start:58.3333333333%}.offset-md-8{margin-inline-start:66.6666666667%}.offset-md-9{margin-inline-start:75%}.offset-md-10{margin-inline-start:83.3333333333%}.offset-md-11{margin-inline-start:91.6666666667%}}@media (min-width: 1280px){.v-col-lg{flex-basis:0;flex-grow:1;max-width:100%}.v-col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0{margin-inline-start:0}.offset-lg-1{margin-inline-start:8.3333333333%}.offset-lg-2{margin-inline-start:16.6666666667%}.offset-lg-3{margin-inline-start:25%}.offset-lg-4{margin-inline-start:33.3333333333%}.offset-lg-5{margin-inline-start:41.6666666667%}.offset-lg-6{margin-inline-start:50%}.offset-lg-7{margin-inline-start:58.3333333333%}.offset-lg-8{margin-inline-start:66.6666666667%}.offset-lg-9{margin-inline-start:75%}.offset-lg-10{margin-inline-start:83.3333333333%}.offset-lg-11{margin-inline-start:91.6666666667%}}@media (min-width: 1920px){.v-col-xl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0{margin-inline-start:0}.offset-xl-1{margin-inline-start:8.3333333333%}.offset-xl-2{margin-inline-start:16.6666666667%}.offset-xl-3{margin-inline-start:25%}.offset-xl-4{margin-inline-start:33.3333333333%}.offset-xl-5{margin-inline-start:41.6666666667%}.offset-xl-6{margin-inline-start:50%}.offset-xl-7{margin-inline-start:58.3333333333%}.offset-xl-8{margin-inline-start:66.6666666667%}.offset-xl-9{margin-inline-start:75%}.offset-xl-10{margin-inline-start:83.3333333333%}.offset-xl-11{margin-inline-start:91.6666666667%}}@media (min-width: 2560px){.v-col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.v-col-xxl-auto{flex:0 0 auto;width:auto;max-width:100%}.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}.offset-xxl-0{margin-inline-start:0}.offset-xxl-1{margin-inline-start:8.3333333333%}.offset-xxl-2{margin-inline-start:16.6666666667%}.offset-xxl-3{margin-inline-start:25%}.offset-xxl-4{margin-inline-start:33.3333333333%}.offset-xxl-5{margin-inline-start:41.6666666667%}.offset-xxl-6{margin-inline-start:50%}.offset-xxl-7{margin-inline-start:58.3333333333%}.offset-xxl-8{margin-inline-start:66.6666666667%}.offset-xxl-9{margin-inline-start:75%}.offset-xxl-10{margin-inline-start:83.3333333333%}.offset-xxl-11{margin-inline-start:91.6666666667%}}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline:8px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content 1fr auto;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-list-item .v-list-item__underlay{position:absolute}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-badge .v-icon,.v-list-item__prepend>.v-icon,.v-list-item__append>.v-badge .v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-badge .v-icon,.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-badge .v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--active:not(.v-list-item--link) .v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover) .v-list-item .v-avatar,.v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering) .v-list-item .v-avatar{--v-avatar-height: 24px}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append .v-list-item__spacer{order:-1;transition:.15s width cubic-bezier(.4,0,.2,1)}.v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item__append>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__append>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__append>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:8px;margin-inline-start:-8px}.v-list-item-action--end{margin-inline-start:8px;margin-inline-end:-8px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0;text-overflow:ellipsis;overflow-wrap:break-word;word-break:initial;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--nav{padding-inline:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list--slim .v-list-group{--prepend-width: 28px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header:not(.v-treeview-item--activetable-group-activator).v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-list-group__header:not(.v-treeview-item--activetable-group-activator).v-list-item--active:hover .v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-avatar .v-avatar__underlay{position:absolute}.v-avatar--rounded{border-radius:4px}.v-avatar--start{margin-inline-end:8px}.v-avatar--end{margin-inline-start:8px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img--rounded{border-radius:4px}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:auto;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-divider__content{padding:0 16px;text-wrap:nowrap}.v-divider__wrapper--vertical .v-divider__content{padding:4px 0}.v-divider__wrapper{display:flex;align-items:center;justify-content:center}.v-divider__wrapper--vertical{flex-direction:column;height:100%}.v-divider__wrapper--vertical .v-divider{margin:0 auto}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;inset:0;pointer-events:none;position:fixed}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;inset:0;opacity:var(--v-overlay-opacity, .32);position:fixed}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-sheet{display:block;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-sheet--border{border-width:thin;box-shadow:none}.v-sheet--absolute{position:absolute}.v-sheet--fixed{position:fixed}.v-sheet--relative{position:relative}.v-sheet--sticky{position:sticky}.v-sheet--rounded{border-radius:4px}.v-date-picker-table--disabled{pointer-events:none}.left-date-picker .v-date-picker-controls{flex-direction:row-reverse!important;justify-content:flex-start!important}.left-date-picker .v-date-picker-controls__mode-btn,.right-date-picker .v-date-picker-controls__mode-btn{display:none!important}.date-picker-desktop[data-v-13334baf]{max-width:1150px;margin-top:15vh;background-color:rgb(var(--v-theme-background))!important}.date-picker-desktop[data-v-13334baf] .pickers{max-height:23em}.date-picker-desktop[data-v-13334baf] .pickers .v-date-picker-header,.date-picker-desktop[data-v-13334baf] .pickers .v-picker-title,.date-picker-desktop[data-v-13334baf] .pickers .v-text-field__details{display:none}.date-picker-desktop[data-v-13334baf] .picker-main{position:relative;z-index:1}.date-picker-desktop[data-v-13334baf] .picker-main .picker-label{opacity:0}.date-picker-desktop[data-v-13334baf] .picker-main .v-picker{background-color:transparent}.date-picker-desktop[data-v-13334baf] .picker-main.active{z-index:1000}.date-picker-desktop[data-v-13334baf] .picker-main .v-picker__body{background-color:transparent}.date-picker-desktop[data-v-13334baf] .picker-main .v-date-picker-table button:not(.picker-main-selected){background-color:transparent}.date-picker-desktop[data-v-13334baf] .picker-main .v-date-picker-table button:focus{background-color:#1976d2;color:#fff}.date-picker-desktop[data-v-13334baf] .picker-main:not(.active) .picker-main-selected{color:#fff}.date-picker-desktop[data-v-13334baf] .picker-compare{transform:translateY(-100%);position:relative;z-index:2}.date-picker-desktop[data-v-13334baf] .picker-compare.active{z-index:1015}.date-picker-desktop[data-v-13334baf] .picker-compare .v-date-picker-header,.date-picker-desktop[data-v-13334baf] .picker-compare .v-date-picker-table thead{opacity:0}.date-picker-desktop[data-v-13334baf] .picker-compare .v-date-picker-table button:not(.picker-compare-selected){color:transparent}.date-picker-desktop[data-v-13334baf] .picker-compare .v-date-picker-table button:focus{background-color:#f57c00;color:#fff}.date-picker-desktop[data-v-13334baf] .picker-compare .v-picker,.date-picker-desktop[data-v-13334baf] .picker-compare .v-picker .v-picker__body{background-color:transparent!important}.date-picker-desktop[data-v-13334baf] .compare-label .v-messages{display:none}.date-picker-desktop[data-v-13334baf] .picker-main-left .v-date-picker-controls>button:nth-of-type(2){display:none!important}.date-picker-desktop[data-v-13334baf] .v-date-picker-controls .picker-main-right>button:nth-of-type(1){display:none}.v-card{display:block;overflow:hidden;overflow-wrap:break-word;position:relative;padding:0;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:4px}.v-card--border{border-width:thin;box-shadow:none}.v-card--absolute{position:absolute}.v-card--fixed{position:fixed}.v-card:hover>.v-card__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-card:focus-visible>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card:focus>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-card--active>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-card--active:hover>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-card--active:focus-visible>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card--active:focus>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-card--variant-plain,.v-card--variant-outlined,.v-card--variant-text,.v-card--variant-tonal{background:transparent;color:inherit}.v-card--variant-plain{opacity:.62}.v-card--variant-plain:focus,.v-card--variant-plain:hover{opacity:1}.v-card--variant-plain .v-card__overlay{display:none}.v-card--variant-elevated,.v-card--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-card--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-outlined{border:thin solid currentColor}.v-card--variant-text .v-card__overlay{background:currentColor}.v-card--variant-tonal .v-card__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;inset:0;pointer-events:none}.v-card .v-card__underlay{position:absolute}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>:not(.v-card__loader){opacity:.6}.v-card--flat{box-shadow:none}.v-card--hover{cursor:pointer}.v-card--hover:before,.v-card--hover:after{border-radius:inherit;content:"";display:block;inset:0;pointer-events:none;position:absolute;transition:inherit}.v-card--hover:before{opacity:1;z-index:-1;box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:after{z-index:1;opacity:0;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:hover:after{opacity:1}.v-card--hover:hover:before{opacity:0}.v-card--hover:hover{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--link{cursor:pointer}.v-card-actions{align-items:center;display:flex;flex:none;min-height:52px;padding:.5rem}.v-card-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;padding:.625rem 1rem}.v-card-item+.v-card-text{padding-top:0}.v-card-item__prepend,.v-card-item__append{align-items:center;display:flex}.v-card-item__prepend{grid-area:prepend;padding-inline-end:.5rem}.v-card-item__append{grid-area:append;padding-inline-start:.5rem}.v-card-item__content{align-self:center;grid-area:content;overflow:hidden}.v-card-title{display:block;flex:none;font-size:1.25rem;font-weight:500;hyphens:auto;letter-spacing:.0125em;min-width:0;overflow-wrap:normal;overflow:hidden;padding:.5rem 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap;word-break:normal;word-wrap:break-word}.v-card .v-card-title{line-height:1.6}.v-card--density-comfortable .v-card-title{line-height:1.75rem}.v-card--density-compact .v-card-title{line-height:1.55rem}.v-card-item .v-card-title{padding:0}.v-card-title+.v-card-text,.v-card-title+.v-card-actions{padding-top:0}.v-card-subtitle{display:block;flex:none;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.v-card .v-card-subtitle{line-height:1.425}.v-card--density-comfortable .v-card-subtitle{line-height:1.125rem}.v-card--density-compact .v-card-subtitle{line-height:1rem}.v-card-item .v-card-subtitle{padding:0 0 .25rem}.v-card-text{flex:1 1 auto;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-text-opacity, 1);padding:1rem;text-transform:none}.v-card .v-card-text{line-height:1.425}.v-card--density-comfortable .v-card-text{line-height:1.2rem}.v-card--density-compact .v-card-text{line-height:1.15rem}.v-card__image{display:flex;height:100%;flex:1 1 auto;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-card__content{border-radius:inherit;overflow:hidden;position:relative}.v-card__loader{inset:0 0 auto;position:absolute;width:100%;z-index:1}.v-card__overlay{background-color:currentColor;border-radius:inherit;position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-checkbox.v-input{flex:0 1 auto}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;color:inherit;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 16px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 12px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 8px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-input--hide-spin-buttons input::-webkit-outer-spin-button,.v-input--hide-spin-buttons input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.v-input--hide-spin-buttons input[type=number]{-moz-appearance:textfield}.v-input--plain-underlined .v-input__prepend,.v-input--plain-underlined .v-input__append{align-items:flex-start}.v-input--density-default.v-input--plain-underlined .v-input__prepend,.v-input--density-default.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 4px)}.v-input--density-comfortable.v-input--plain-underlined .v-input__prepend,.v-input--density-comfortable.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 2px)}.v-input--density-compact.v-input--plain-underlined .v-input__prepend,.v-input--density-compact.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 0px)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-date-picker{overflow:hidden;width:328px}.v-date-picker--show-week{width:368px}.v-date-picker-controls{display:flex;align-items:center;justify-content:space-between;font-size:.875rem;padding-top:4px;padding-bottom:4px;padding-inline-start:6px;padding-inline-end:12px}.v-date-picker-controls>.v-btn:first-child{text-transform:none;font-weight:400;line-height:initial;letter-spacing:initial}.v-date-picker-controls--variant-classic{padding-inline-start:12px}.v-date-picker-controls--variant-modern .v-date-picker__title:not(:hover){opacity:.7}.v-date-picker--month .v-date-picker-controls--variant-modern .v-date-picker__title{cursor:pointer}.v-date-picker--year .v-date-picker-controls--variant-modern .v-date-picker__title{opacity:1}.v-date-picker-controls .v-btn:last-child{margin-inline-start:4px}.v-date-picker--year .v-date-picker-controls .v-date-picker-controls__mode-btn{transform:rotate(180deg)}.v-date-picker-controls__date{margin-inline-end:4px}.v-date-picker-controls--variant-classic .v-date-picker-controls__date{margin:auto;text-align:center}.v-date-picker-controls__month{display:flex}.v-locale--is-rtl.v-date-picker-controls__month,.v-locale--is-rtl .v-date-picker-controls__month{flex-direction:row-reverse}.v-date-picker-controls--variant-classic .v-date-picker-controls__month{flex:1 0 auto}.v-date-picker__title{display:inline-block}.v-date-picker-header{align-items:flex-end;height:70px;display:grid;grid-template-areas:"prepend content append";grid-template-columns:min-content minmax(0,1fr) min-content;overflow:hidden;padding-inline:24px 12px;padding-bottom:12px}.v-date-picker-header__append{grid-area:append}.v-date-picker-header__prepend{grid-area:prepend;padding-inline-start:8px}.v-date-picker-header__content{align-items:center;display:inline-flex;font-size:32px;line-height:40px;grid-area:content;justify-content:space-between}.v-date-picker-header--clickable .v-date-picker-header__content{cursor:pointer}.v-date-picker-header--clickable .v-date-picker-header__content:not(:hover){opacity:.7}.date-picker-header-transition-enter-active,.date-picker-header-reverse-transition-enter-active,.date-picker-header-transition-leave-active,.date-picker-header-reverse-transition-leave-active{transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.date-picker-header-transition-enter-from{transform:translateY(100%)}.date-picker-header-transition-leave-to{opacity:0;transform:translateY(-100%)}.date-picker-header-reverse-transition-enter-from{transform:translateY(-100%)}.date-picker-header-reverse-transition-leave-to{opacity:0;transform:translateY(100%)}.v-date-picker-month{display:flex;justify-content:center;padding:0 12px 8px;--v-date-picker-month-day-diff: 4px}.v-date-picker-month__weeks{display:grid;grid-template-rows:min-content min-content min-content min-content min-content min-content min-content;column-gap:4px;font-size:.85rem}.v-date-picker-month__weeks+.v-date-picker-month__days{grid-row-gap:0}.v-date-picker-month__weekday{font-size:.85rem}.v-date-picker-month__days{display:grid;grid-template-columns:min-content min-content min-content min-content min-content min-content min-content;column-gap:4px;flex:1 1;justify-content:space-around}.v-date-picker-month__day{align-items:center;display:flex;justify-content:center;position:relative;height:40px;width:40px}.v-date-picker-month__day--selected .v-btn{background-color:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-date-picker-month__day .v-btn.v-date-picker-month__day-btn{--v-btn-height: 24px;--v-btn-size: .85rem}.v-date-picker-month__day--week{font-size:var(--v-btn-size)}.v-date-picker-month__day--adjacent{opacity:.5}.v-date-picker-month__day--hide-adjacent{opacity:0}.v-date-picker-months{height:288px}.v-date-picker-months__content{align-items:center;display:grid;flex:1 1;height:inherit;justify-content:space-around;grid-template-columns:repeat(2,1fr);grid-gap:0px 24px;padding-inline-start:36px;padding-inline-end:36px}.v-date-picker-months__content .v-btn{text-transform:none;padding-inline-start:8px;padding-inline-end:8px}.v-date-picker-years{height:288px;overflow-y:scroll}.v-date-picker-years__content{display:grid;flex:1 1;justify-content:space-around;grid-template-columns:repeat(3,1fr);gap:8px 24px;padding-inline:32px}.v-date-picker-years__content .v-btn{padding-inline:8px}.v-picker.v-sheet{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px;display:grid;grid-auto-rows:min-content;grid-template-areas:"title" "header" "body";overflow:hidden}.v-picker.v-sheet.v-picker--with-actions{grid-template-areas:"title" "header" "body" "actions"}.v-picker__body{grid-area:body;overflow:hidden;position:relative}.v-picker__header{grid-area:header}.v-picker__actions{grid-area:actions;padding:0 12px 12px;display:flex;align-items:center;justify-content:flex-end}.v-picker__actions .v-btn{min-width:48px}.v-picker__actions .v-btn:not(:last-child){margin-inline-end:8px}.v-picker--landscape{grid-template-areas:"title" "header body" "header body"}.v-picker--landscape.v-picker--with-actions{grid-template-areas:"title" "header body" "header actions"}.v-picker-title{text-transform:uppercase;font-size:.75rem;grid-area:title;padding-inline:24px 12px;padding-top:16px;padding-bottom:16px;font-weight:400;letter-spacing:.1666666667em}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline:16px}.v-input--plain-underlined.v-text-field .v-input__details{padding-inline:0}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{--v-theme-overlay-multiplier: 1;display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 8px;--v-field-padding-bottom: 4px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 4px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field .v-chip{--v-chip-height: 24px}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 16px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 12px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-top: 4px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-top: 2px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-top: 0px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:24px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{align-items:center;color:inherit;column-gap:2px;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));min-width:0;padding-inline:var(--v-field-padding-start) var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-input--density-default .v-field__input{row-gap:8px}.v-input--density-comfortable .v-field__input{row-gap:6px}.v-input--density-compact .v-field__input{row-gap:4px}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 8px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 4px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;overflow:hidden;margin-inline:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}@media (hover: none){.v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;display:block;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform;z-index:1}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:unset}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-color:currentColor;border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width);border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit}.v-field--rounded.v-field--variant-outlined .v-field__outline__start,[class^=rounded-].v-field--variant-outlined .v-field__outline__start,[class*=" rounded-"].v-field--variant-outlined .v-field__outline__start{flex-basis:calc(var(--v-input-control-height) / 2 + 2px)}.v-field--reverse.v-field--variant-outlined .v-field__outline__start{border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0;border-inline-end-width:var(--v-field-border-width);border-inline-start-width:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative;max-width:calc(100% - 12px)}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width);border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0}.v-field--reverse.v-field--variant-outlined .v-field__outline__end{border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit;border-inline-end-width:0;border-inline-start-width:var(--v-field-border-width)}.v-field__loader{top:calc(100% - 2px);left:0;position:absolute;right:0;width:100%;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;overflow:hidden}.v-field--variant-outlined .v-field__loader{top:calc(100% - 3px);width:calc(100% - 2px);left:1px}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__field,.v-field--reverse .v-field__input,.v-field--reverse .v-field__outline{flex-direction:row-reverse}.v-field--reverse .v-field__input,.v-field--reverse input{text-align:end}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.date-picker-tablet[data-v-9af8a2b4]{max-width:785px;margin-top:15vh;background-color:rgb(var(--v-theme-background))!important}.date-picker-tablet[data-v-9af8a2b4] .v-card{overflow:hidden!important}.date-picker-tablet[data-v-9af8a2b4] .pickers{max-height:23.5em}.date-picker-tablet[data-v-9af8a2b4] .pickers .v-date-picker-header,.date-picker-tablet[data-v-9af8a2b4] .pickers .v-picker-title,.date-picker-tablet[data-v-9af8a2b4] .pickers .v-text-field__details,.date-picker-tablet[data-v-9af8a2b4] .picker-input .v-text-field__details{display:none}.date-picker-tablet[data-v-9af8a2b4] .picker-main{position:relative;z-index:1}.date-picker-tablet[data-v-9af8a2b4] .picker-main .picker-label{opacity:0}.date-picker-tablet[data-v-9af8a2b4] .picker-main.active{z-index:1000}.date-picker-tablet[data-v-9af8a2b4] .picker-main .v-picker__body{background-color:transparent}.date-picker-tablet[data-v-9af8a2b4] .picker-main .v-date-picker-table button:not(.picker-main-selected){background-color:transparent}.date-picker-tablet[data-v-9af8a2b4] .picker-main .v-date-picker-table button:focus{background-color:#1976d2;color:#fff}.date-picker-tablet[data-v-9af8a2b4] .picker-main:not(.active) .picker-main-selected{color:#fff}.date-picker-tablet[data-v-9af8a2b4] .picker-compare{transform:translateY(-100%);position:relative;z-index:2}.date-picker-tablet[data-v-9af8a2b4] .picker-compare.active{z-index:1015}.date-picker-tablet[data-v-9af8a2b4] .picker-compare .v-date-picker-header,.date-picker-tablet[data-v-9af8a2b4] .picker-compare .v-date-picker-table thead{opacity:0}.date-picker-tablet[data-v-9af8a2b4] .picker-compare .v-date-picker-table button:not(.picker-compare-selected){color:transparent}.date-picker-tablet[data-v-9af8a2b4] .picker-compare .v-date-picker-table button:focus{background-color:#f57c00;color:#fff}.date-picker-tablet[data-v-9af8a2b4] .picker-compare .v-picker .v-picker__body{background-color:transparent!important}.date-picker-tablet[data-v-9af8a2b4] .compare-label .v-messages,.date-picker-mobile[data-v-e9a33dc2] .picker-input .v-text-field__details,.date-picker-mobile[data-v-e9a33dc2] .compare-label .v-messages{display:none}.v-dialog{align-items:center;justify-content:center;margin:auto}.v-dialog>.v-overlay__content{max-height:calc(100% - 48px);width:calc(100% - 48px);max-width:calc(100% - 48px);margin:24px}.v-dialog>.v-overlay__content,.v-dialog>.v-overlay__content>form{display:flex;flex-direction:column;min-height:0}.v-dialog>.v-overlay__content>.v-card,.v-dialog>.v-overlay__content>.v-sheet,.v-dialog>.v-overlay__content>form>.v-card,.v-dialog>.v-overlay__content>form>.v-sheet{--v-scrollbar-offset: 0px;border-radius:4px;overflow-y:auto;box-shadow:0 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 9px 46px 8px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-dialog>.v-overlay__content>.v-card,.v-dialog>.v-overlay__content>form>.v-card{display:flex;flex-direction:column}.v-dialog>.v-overlay__content>.v-card>.v-card-item,.v-dialog>.v-overlay__content>form>.v-card>.v-card-item{padding:16px 24px}.v-dialog>.v-overlay__content>.v-card>.v-card-item+.v-card-text,.v-dialog>.v-overlay__content>form>.v-card>.v-card-item+.v-card-text{padding-top:0}.v-dialog>.v-overlay__content>.v-card>.v-card-text,.v-dialog>.v-overlay__content>form>.v-card>.v-card-text{font-size:inherit;letter-spacing:.03125em;line-height:inherit;padding:16px 24px 24px}.v-dialog>.v-overlay__content>.v-card>.v-card-actions,.v-dialog>.v-overlay__content>form>.v-card>.v-card-actions{justify-content:flex-end}.v-dialog--fullscreen{--v-scrollbar-offset: 0px}.v-dialog--fullscreen>.v-overlay__content{border-radius:0;margin:0;padding:0;width:100%;height:100%;max-width:100%;max-height:100%;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-overlay__content>.v-card,.v-dialog--fullscreen>.v-overlay__content>.v-sheet,.v-dialog--fullscreen>.v-overlay__content>form>.v-card,.v-dialog--fullscreen>.v-overlay__content>form>.v-sheet{min-height:100%;min-width:100%;border-radius:0}.v-dialog--scrollable>.v-overlay__content,.v-dialog--scrollable>.v-overlay__content>form{display:flex}.v-dialog--scrollable>.v-overlay__content>.v-card,.v-dialog--scrollable>.v-overlay__content>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-overlay__content>.v-card>.v-card-text,.v-dialog--scrollable>.v-overlay__content>form>.v-card>.v-card-text{backface-visibility:hidden;overflow-y:auto}.date-pickers-container[data-v-f27dcf42]{position:fixed;top:0;left:0;padding:0;margin:0;z-index:100;width:100vw}.theme--dark input[type=date]::-webkit-calendar-picker-indicator{background:url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="%23FFFFFF" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg>') no-repeat}`)),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import { defineStore as Es, createPinia as ru } from "pinia";
import { shallowRef as se, Fragment as Ae, reactive as Ln, computed as f, watchEffect as Vt, toRefs as Ii, capitalize as Nn, warn as Ca, getCurrentInstance as su, ref as H, unref as V, provide as Ke, inject as Me, defineComponent as iu, camelize as Ri, h as rn, isRef as nn, createVNode as o, toRef as W, watch as J, onScopeDispose as qe, effectScope as Er, toRaw as $e, onBeforeUnmount as Ct, onMounted as sn, onUpdated as lu, mergeProps as K, Text as ou, readonly as Ar, Transition as Ut, resolveDynamicComponent as uu, nextTick as Be, withDirectives as tt, TransitionGroup as Vr, vShow as Fn, onBeforeMount as Ir, resolveDirective as ln, Teleport as cu, openBlock as Z, createBlock as he, withCtx as T, createCommentVNode as De, createElementBlock as je, normalizeClass as sa, toDisplayString as _n, renderList as du, createTextVNode as be, cloneVNode as fu, withModifiers as vu } from "vue";
import { useDisplay as mu } from "vuetify";
function As(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(n), !0).forEach(function(a) {
      Yi(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : As(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function xn(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(t) {
    return typeof t;
  } : xn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function Yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Li = "_", hu = "function", gu = [];
function yu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gu, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Li;
  if (!Ni(e))
    throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
  if (e.indexOf(t) !== -1)
    throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

` + "The placeholder character that was received is: ".concat(JSON.stringify(t), `

`) + "The mask that was received is: ".concat(JSON.stringify(e)));
  return e.map(function(n) {
    return n instanceof RegExp ? t : n;
  }).join("");
}
function Ni(e) {
  return Array.isArray && Array.isArray(e) || e instanceof Array;
}
var _u = "[]";
function Su(e) {
  for (var t = [], n; n = e.indexOf(_u), n !== -1; )
    t.push(n), e.splice(n, 1);
  return {
    maskWithoutCaretTraps: e,
    indexes: t
  };
}
var pu = [], Lt = "";
function Fi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lt, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pu, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!Ni(t))
    if (xn(t) === hu)
      t = t(e, n), t = Su(t).maskWithoutCaretTraps;
    else
      throw new Error("Text-mask:conformToMask; The mask property must be an array.");
  var a = n.guide, r = a === void 0 ? !0 : a, s = n.previousConformedValue, i = s === void 0 ? Lt : s, l = n.placeholderChar, u = l === void 0 ? Li : l, c = n.placeholder, d = c === void 0 ? yu(t, u) : c, y = n.currentCaretPosition, m = n.keepCharPositions, v = r === !1 && i !== void 0, g = e.length, h = i.length, S = d.length, _ = t.length, x = g - h, D = x > 0, k = y + (D ? -x : 0), P = k + Math.abs(x);
  if (m === !0 && !D) {
    for (var E = Lt, w = k; w < P; w++)
      d[w] === u && (E += u);
    e = e.slice(0, k) + E + e.slice(k, g);
  }
  for (var $ = e.split(Lt).map(function(Tt, oe) {
    return {
      char: Tt,
      isNew: oe >= k && oe < P
    };
  }), O = g - 1; O >= 0; O--) {
    var F = $[O].char;
    if (F !== u) {
      var L = O >= k && h === _;
      F === d[L ? O - x : O] && $.splice(O, 1);
    }
  }
  var b = Lt, C = !1;
  e: for (var R = 0; R < S; R++) {
    var U = d[R];
    if (U === u) {
      if ($.length > 0)
        for (; $.length > 0; ) {
          var j = $.shift(), ce = j.char, te = j.isNew;
          if (ce === u && v !== !0) {
            b += u;
            continue e;
          } else if (t[R].test(ce)) {
            if (m !== !0 || te === !1 || i === Lt || r === !1 || !D)
              b += ce;
            else {
              for (var pe = $.length, ne = null, we = 0; we < pe; we++) {
                var Ye = $[we];
                if (Ye.char !== u && Ye.isNew === !1)
                  break;
                if (Ye.char === u) {
                  ne = we;
                  break;
                }
              }
              ne !== null ? (b += ce, $.splice(ne, 1)) : R--;
            }
            continue e;
          } else
            C = !0;
        }
      v === !1 && (b += d.substr(R, S));
      break;
    } else
      b += U;
  }
  if (v && D === !1) {
    for (var Le = null, Je = 0; Je < b.length; Je++)
      d[Je] === u && (Le = Je);
    Le !== null ? b = b.substr(0, Le + 1) : b = Lt;
  }
  return {
    conformedValue: b,
    meta: {
      someCharsRejected: C
    }
  };
}
var cr = {
  __nextCharOptional__: !0
}, Pa = {
  "#": /\d/,
  A: /[a-z]/i,
  N: /[a-z0-9]/i,
  "?": cr,
  X: /./
}, bu = function(t) {
  var n = t.lastIndexOf("/");
  return new RegExp(t.slice(1, n), t.slice(n + 1));
}, ku = function(t) {
  return bu(t.toString().replace(/.(\/)[gmiyus]{0,6}$/, function(n) {
    return n.replace("/", "?/");
  }));
}, wu = function(t) {
  return "[\\^$.|?*+()".indexOf(t) > -1 ? "\\".concat(t) : t;
}, Cu = function(t) {
  return new RegExp("/[".concat(wu(t), "]/"));
}, Pu = function(t) {
  return t instanceof RegExp;
}, xu = function(t) {
  return Pu(t) ? t : Cu(t);
};
function $i(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pa;
  return e.map(function(n, a, r) {
    var s = t[n] || n, i = r[a - 1], l = t[i] || i;
    return s === cr ? null : l === cr ? ku(xu(s)) : s;
  }).filter(Boolean);
}
function Mu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pa;
  return $i(e.split(""), t);
}
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pa, n = e.map(function(a) {
    return a instanceof RegExp ? a : typeof a == "string" ? a.split("") : null;
  }).filter(Boolean).reduce(function(a, r) {
    return a.concat(r);
  }, []);
  return $i(n, t);
}
var Du = function(t, n) {
  var a = document.createEvent("HTMLEvents");
  a.initEvent(n, !0, !0), t.dispatchEvent(a);
}, Xa = function(t) {
  return t instanceof HTMLInputElement ? t : t.querySelector("input") || t;
}, Bi = function(t) {
  return typeof t == "function";
}, Rr = function(t) {
  return typeof t == "string";
}, Ou = function(t) {
  return t instanceof RegExp;
};
function Wi(e, t) {
  return Array.isArray(e) ? Tu(e, t) : Bi(e) ? e : Rr(e) && e.length > 0 ? Mu(e, t) : e;
}
function Eu() {
  var e = /* @__PURE__ */ new Map(), t = {
    previousValue: "",
    mask: []
  };
  function n(s) {
    return e.get(s) || Pn({}, t);
  }
  function a(s, i) {
    e.set(s, Pn(Pn({}, n(s)), i));
  }
  function r(s) {
    e.delete(s);
  }
  return {
    partiallyUpdate: a,
    remove: r,
    get: n
  };
}
function Ui(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pa;
  return e === null || Array.isArray(e) || xn(e) !== "object" ? t : Object.keys(e).reduce(function(n, a) {
    var r = e[a];
    return r !== null && !(r instanceof RegExp) ? n : Pn(Pn({}, n), {}, Yi({}, a, r));
  }, t);
}
var ia = Eu();
function Au(e) {
  Du(e, "input");
}
function Vs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.value, a = ia.get(e), r = a.previousValue, s = a.mask, i = n !== r, l = n.length > r.length, u = n && i && l;
  if ((t || u) && s) {
    var c = Fi(n, s, {
      guide: !1
    }), d = c.conformedValue;
    e.value = d, Au(e);
  }
  ia.partiallyUpdate(e, {
    previousValue: n
  });
}
function Is(e, t, n) {
  var a = Wi(t, n);
  ia.partiallyUpdate(e, {
    mask: a
  });
}
function Rs(e) {
  var t = Array.isArray(e) ? e : [e], n = t.filter(function(a) {
    return Rr(a) || Ou(a);
  });
  return n.toString();
}
function Vu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ui(e && e.placeholders);
  return {
    bind: function(a, r) {
      var s = r.value;
      a = Xa(a), Is(a, s, t), Vs(a);
    },
    componentUpdated: function(a, r) {
      var s = r.value, i = r.oldValue;
      a = Xa(a);
      var l = Bi(s) || Rs(i) !== Rs(s);
      l && Is(a, s, t), Vs(a, l);
    },
    unbind: function(a) {
      a = Xa(a), ia.remove(a);
    }
  };
}
var Iu = Vu();
function Ru() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ui(e && e.placeholders);
  return function(n, a) {
    if (!Rr(n) && !Number.isFinite(n)) return n;
    var r = Wi(a, t), s = Fi("".concat(n), r, {
      guide: !1
    }), i = s.conformedValue;
    return i;
  };
}
Ru();
const $n = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, We = typeof window < "u", Yr = We && "IntersectionObserver" in window;
function Hi(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let r = 0; r < a; r++) {
    if (e == null)
      return n;
    e = e[t[r]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Bn(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Bn(e[a], t[a]));
}
function Yu(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Hi(e, t.split("."), n));
}
function Sn(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string") return Yu(e, t, n);
  if (Array.isArray(t)) return Hi(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function ji(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function q(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function dr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Lu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Ys = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Ja(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function zi(e, t) {
  const n = {}, a = new Set(Object.keys(e));
  for (const r of t)
    a.has(r) && (n[r] = e[r]);
  return n;
}
function Ls(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const s in e)
    t.some((i) => i instanceof RegExp ? i.test(s) : i === s) && !n?.some((i) => i === s) ? a[s] = e[s] : r[s] = e[s];
  return [a, r];
}
function bt(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
function Nu(e, t) {
  const n = {};
  return t.forEach((a) => n[a] = e[a]), n;
}
const Gi = /^on[^a-z]/, Lr = (e) => Gi.test(e), Fu = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Nr(e) {
  const [t, n] = Ls(e, [Gi]), a = bt(t, Fu), [r, s] = Ls(n, ["class", "style", "id", /^data-/]);
  return Object.assign(r, t), Object.assign(s, a), [r, s];
}
function Ie(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function la(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Ns(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function $u(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const r in e)
    a[r] = e[r];
  for (const r in t) {
    const s = e[r], i = t[r];
    if (dr(s) && dr(i)) {
      a[r] = Kt(s, i, n);
      continue;
    }
    if (Array.isArray(s) && Array.isArray(i) && n) {
      a[r] = n(s, i);
      continue;
    }
    a[r] = i;
  }
  return a;
}
function Ki(e) {
  return e.map((t) => t.type === Ae ? Ki(t.children) : t).flat();
}
function $t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if ($t.cache.has(e)) return $t.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return $t.cache.set(e, t), t;
}
$t.cache = /* @__PURE__ */ new Map();
function wn(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => wn(e, n)).flat(1);
  if (t.suspense)
    return wn(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => wn(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return wn(e, t.component.subTree).flat(1);
  }
  return [];
}
function Fr(e) {
  const t = Ln({}), n = f(e);
  return Vt(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), Ii(t);
}
function oa(e, t) {
  return e.includes(t);
}
function qi(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Fe = () => [Function, Array];
function Fs(e, t) {
  return t = "on" + Nn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Bu(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const r of e)
      r(...n);
  else typeof e == "function" && e(...n);
}
function ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Zi(e, t, n) {
  let a, r = e.indexOf(document.activeElement);
  const s = t === "next" ? 1 : -1;
  do
    r += s, a = e[r];
  while ((!a || a.offsetParent == null || !(n?.(a) ?? !0)) && r < e.length && r >= 0);
  return a;
}
function ca(e, t) {
  const n = ua(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && n[0]?.focus();
  else if (t === "first")
    n[0]?.focus();
  else if (t === "last")
    n.at(-1)?.focus();
  else if (typeof t == "number")
    n[t]?.focus();
  else {
    const a = Zi(n, t);
    a ? a.focus() : ca(e, t === "next" ? "first" : "last");
  }
}
function Xi(e, t) {
  if (!(We && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Wu(e, t) {
  if (!We || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Uu(e, t) {
  const n = e.clientX, a = e.clientY, r = t.getBoundingClientRect(), s = r.left, i = r.top, l = r.right, u = r.bottom;
  return n >= s && n <= l && a >= i && a <= u;
}
function da() {
  const e = se(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Lu(e.value)
  }), t;
}
const Ji = ["top", "bottom"], Hu = ["start", "end", "left", "right"];
function fr(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = oa(Ji, n) ? "start" : oa(Hu, n) ? "top" : "center"), {
    side: $s(n, t),
    align: $s(a, t)
  };
}
function $s(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Qa(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function er(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Bs(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Ws(e) {
  return oa(Ji, e.side) ? "y" : "x";
}
class Bt {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: r,
      height: s
    } = t;
    this.x = n, this.y = a, this.width = r, this.height = s;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Us(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Qi(e) {
  return Array.isArray(e) ? new Bt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function $r(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let r, s, i, l, u;
    if (a.startsWith("matrix3d("))
      r = a.slice(9, -1).split(/, /), s = +r[0], i = +r[5], l = +r[12], u = +r[13];
    else if (a.startsWith("matrix("))
      r = a.slice(7, -1).split(/, /), s = +r[0], i = +r[3], l = +r[4], u = +r[5];
    else
      return new Bt(t);
    const c = n.transformOrigin, d = t.x - l - (1 - s) * parseFloat(c), y = t.y - u - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = s ? t.width / s : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new Bt({
      x: d,
      y,
      width: m,
      height: v
    });
  } else
    return new Bt(t);
}
function qt(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((r) => {
    a.onfinish = () => {
      r(a);
    };
  })), a;
}
const ea = /* @__PURE__ */ new WeakMap();
function ju(e, t) {
  Object.keys(t).forEach((n) => {
    if (Lr(n)) {
      const a = qi(n), r = ea.get(e);
      if (t[n] == null)
        r?.forEach((s) => {
          const [i, l] = s;
          i === a && (e.removeEventListener(a, l), r.delete(s));
        });
      else if (!r || ![...r].some((s) => s[0] === a && s[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const s = r || /* @__PURE__ */ new Set();
        s.add([a, t[n]]), ea.has(e) || ea.set(e, s);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function zu(e, t) {
  Object.keys(t).forEach((n) => {
    if (Lr(n)) {
      const a = qi(n), r = ea.get(e);
      r?.forEach((s) => {
        const [i, l] = s;
        i === a && (e.removeEventListener(a, l), r.delete(s));
      });
    } else
      e.removeAttribute(n);
  });
}
const jt = 2.4, Hs = 0.2126729, js = 0.7151522, zs = 0.072175, Gu = 0.55, Ku = 0.58, qu = 0.57, Zu = 0.62, qn = 0.03, Gs = 1.45, Xu = 5e-4, Ju = 1.25, Qu = 1.25, Ks = 0.078, qs = 12.82051282051282, Zn = 0.06, Zs = 1e-3;
function Xs(e, t) {
  const n = (e.r / 255) ** jt, a = (e.g / 255) ** jt, r = (e.b / 255) ** jt, s = (t.r / 255) ** jt, i = (t.g / 255) ** jt, l = (t.b / 255) ** jt;
  let u = n * Hs + a * js + r * zs, c = s * Hs + i * js + l * zs;
  if (u <= qn && (u += (qn - u) ** Gs), c <= qn && (c += (qn - c) ** Gs), Math.abs(c - u) < Xu) return 0;
  let d;
  if (c > u) {
    const y = (c ** Gu - u ** Ku) * Ju;
    d = y < Zs ? 0 : y < Ks ? y - y * qs * Zn : y - Zn;
  } else {
    const y = (c ** Zu - u ** qu) * Qu;
    d = y > -Zs ? 0 : y > -Ks ? y - y * qs * Zn : y + Zn;
  }
  return d * 100;
}
function Jt(e) {
  Ca(`Vuetify: ${e}`);
}
function ec(e) {
  Ca(`Vuetify error: ${e}`);
}
function tc(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, Ca(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
function vr(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function nc(e) {
  return vr(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Js = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ac = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => Qs({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => Qs({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => Tn({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => Tn({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Cn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Jt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Js.test(e)) {
    const {
      groups: t
    } = e.match(Js), {
      fn: n,
      values: a
    } = t, r = a.split(/,\s*/).map((s) => s.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return ac[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || Jt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Jt(`'${e}' is not a valid hex(a) color`), rc(t);
  } else if (typeof e == "object") {
    if (Ja(e, ["r", "g", "b"]))
      return e;
    if (Ja(e, ["h", "s", "l"]))
      return Tn(el(e));
    if (Ja(e, ["h", "s", "v"]))
      return Tn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Tn(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: r
  } = e, s = (l) => {
    const u = (l + t / 60) % 6;
    return a - a * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, i = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: i[0],
    g: i[1],
    b: i[2],
    a: r
  };
}
function Qs(e) {
  return Tn(el(e));
}
function el(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: r
  } = e, s = a + n * Math.min(a, 1 - a), i = s === 0 ? 0 : 2 - 2 * a / s;
  return {
    h: t,
    s: i,
    v: s,
    a: r
  };
}
function rc(e) {
  e = sc(e);
  let [t, n, a, r] = $u(e, 2).map((s) => parseInt(s, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: a,
    a: r
  };
}
function sc(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Ns(Ns(e, 6), 8, "F")), e;
}
function ic(e) {
  const t = Math.abs(Xs(Cn(0), Cn(e)));
  return Math.abs(Xs(Cn(16777215), Cn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function A(e, t) {
  return (n) => Object.keys(e).reduce((a, r) => {
    const i = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
      type: e[r]
    };
    return n && r in n ? a[r] = {
      ...i,
      default: n[r]
    } : a[r] = i, t && !a[r].source && (a[r].source = t), a;
  }, {});
}
const ee = A({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Te(e, t) {
  const n = su();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function ut() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Te(e).type;
  return $t(t?.aliasName || t?.name);
}
let tl = 0, ta = /* @__PURE__ */ new WeakMap();
function ct() {
  const e = Te("getUid");
  if (ta.has(e)) return ta.get(e);
  {
    const t = tl++;
    return ta.set(e, t), t;
  }
}
ct.reset = () => {
  tl = 0, ta = /* @__PURE__ */ new WeakMap();
};
function lc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const fa = Symbol.for("vuetify:defaults");
function Br() {
  const e = Me(fa);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Wn(e, t) {
  const n = Br(), a = H(e), r = f(() => {
    if (V(t?.disabled)) return n.value;
    const i = V(t?.scoped), l = V(t?.reset), u = V(t?.root);
    if (a.value == null && !(i || l || u)) return n.value;
    let c = Kt(a.value, {
      prev: n.value
    });
    if (i) return c;
    if (l || u) {
      const d = Number(l || 1 / 0);
      for (let y = 0; y <= d && !(!c || !("prev" in c)); y++)
        c = c.prev;
      return c && typeof u == "string" && u in c && (c = Kt(Kt(c, {
        prev: c
      }), c[u])), c;
    }
    return c.prev ? Kt(c.prev, c) : c;
  });
  return Ke(fa, r), r;
}
function oc(e, t) {
  return typeof e.props?.[t] < "u" || typeof e.props?.[$t(t)] < "u";
}
function uc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br();
  const a = Te("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => n.value?.[e._as ?? t]), s = new Proxy(e, {
    get(u, c) {
      const d = Reflect.get(u, c);
      return c === "class" || c === "style" ? [r.value?.[c], d].filter((y) => y != null) : typeof c == "string" && !oc(a.vnode, c) ? r.value?.[c] !== void 0 ? r.value?.[c] : n.value?.global?.[c] !== void 0 ? n.value?.global?.[c] : d : d;
    }
  }), i = se();
  Vt(() => {
    if (r.value) {
      const u = Object.entries(r.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      i.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      i.value = void 0;
  });
  function l() {
    const u = lc(fa, a);
    Ke(fa, f(() => i.value ? Kt(u?.value ?? {}, i.value) : u?.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function Un(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Jt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = A(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return zi(a, t);
    }, e.props._as = String, e.setup = function(a, r) {
      const s = Br();
      if (!s.value) return e._setup(a, r);
      const {
        props: i,
        provideSubDefaults: l
      } = uc(a, a._as ?? e.name, s), u = e._setup(i, r);
      return l(), u;
    };
  }
  return e;
}
function B() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Un : iu)(t);
}
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return B()({
    name: n ?? Nn(Ri(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...ee()
    },
    setup(a, r) {
      let {
        slots: s
      } = r;
      return () => rn(a.tag, {
        class: [e, a.class],
        style: a.style
      }, s.default?.());
    }
  });
}
function nl(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const va = "cubic-bezier(0.4, 0, 0.2, 1)", cc = "cubic-bezier(0.0, 0, 0.2, 1)", dc = "cubic-bezier(0.4, 0, 1, 1)";
function fc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? vc(e) : Wr(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ma(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Wr(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Wr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function vc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function mc(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function z(e) {
  const t = Te("useRender");
  t.render = e;
}
const on = A({
  border: [Boolean, Number, String]
}, "border");
function un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return {
    borderClasses: f(() => {
      const a = nn(e) ? e.value : e.border, r = [];
      if (a === !0 || a === "")
        r.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const s of String(a).split(" "))
          r.push(`border-${s}`);
      return r;
    })
  };
}
const hc = [null, "default", "comfortable", "compact"], Pt = A({
  density: {
    type: String,
    default: "default",
    validator: (e) => hc.includes(e)
  }
}, "density");
function It(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return {
    densityClasses: f(() => `${t}--density-${e.density}`)
  };
}
const cn = A({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function dn(e) {
  return {
    elevationClasses: f(() => {
      const n = nn(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const dt = A({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return {
    roundedClasses: f(() => {
      const a = nn(e) ? e.value : e.rounded, r = nn(e) ? e.value : e.tile, s = [];
      if (a === !0 || a === "")
        s.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          s.push(`rounded-${i}`);
      else (r || a === !1) && s.push("rounded-0");
      return s;
    })
  };
}
const Ce = A({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), ei = Symbol.for("vuetify:theme"), Ee = A({
  theme: String
}, "theme");
function Re(e) {
  Te("provideTheme");
  const t = Me(ei, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), a = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), s = {
    ...t,
    name: n,
    current: a,
    themeClasses: r
  };
  return Ke(ei, s), s;
}
function Ur(e) {
  return Fr(() => {
    const t = [], n = {};
    if (e.value.background)
      if (vr(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && nc(e.value.background)) {
          const a = Cn(e.value.background);
          if (a.a == null || a.a === 1) {
            const r = ic(a);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (vr(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function kt(e, t) {
  const n = f(() => ({
    text: nn(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = Ur(n);
  return {
    textColorClasses: a,
    textColorStyles: r
  };
}
function et(e, t) {
  const n = f(() => ({
    background: nn(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = Ur(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: r
  };
}
const gc = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ma(e, t) {
  return o(Ae, null, [e && o("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), o("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const fn = A({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => gc.includes(e)
  }
}, "variant");
function Ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  const n = f(() => {
    const {
      variant: s
    } = V(e);
    return `${t}--variant-${s}`;
  }), {
    colorClasses: a,
    colorStyles: r
  } = Ur(f(() => {
    const {
      variant: s,
      color: i
    } = V(e);
    return {
      [["elevated", "flat"].includes(s) ? "background" : "text"]: i
    };
  }));
  return {
    colorClasses: a,
    colorStyles: r,
    variantClasses: n
  };
}
const al = A({
  baseColor: String,
  divided: Boolean,
  ...on(),
  ...ee(),
  ...Pt(),
  ...cn(),
  ...dt(),
  ...Ce(),
  ...Ee(),
  ...fn()
}, "VBtnGroup"), ti = B()({
  name: "VBtnGroup",
  props: al(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      densityClasses: r
    } = It(e), {
      borderClasses: s
    } = un(e), {
      elevationClasses: i
    } = dn(e), {
      roundedClasses: l
    } = ft(e);
    Wn({
      VBtn: {
        height: "auto",
        baseColor: W(e, "baseColor"),
        color: W(e, "color"),
        density: W(e, "density"),
        flat: !0,
        variant: W(e, "variant")
      }
    }), z(() => o(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, s.value, r.value, i.value, l.value, e.class],
      style: e.style
    }, n));
  }
});
function an(e, t) {
  let n;
  function a() {
    n = Er(), n.run(() => t.length ? t(() => {
      n?.stop(), a();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? a() : r || (n?.stop(), n = void 0);
  }, {
    immediate: !0
  }), qe(() => {
    n?.stop();
  });
}
function _e(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const s = Te("useProxiedModel"), i = H(e[t] !== void 0 ? e[t] : n), l = $t(t), c = l !== t ? f(() => (e[t], !!((s.vnode.props?.hasOwnProperty(t) || s.vnode.props?.hasOwnProperty(l)) && (s.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || s.vnode.props?.hasOwnProperty(`onUpdate:${l}`))))) : f(() => (e[t], !!(s.vnode.props?.hasOwnProperty(t) && s.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  an(() => !c.value, () => {
    J(() => e[t], (y) => {
      i.value = y;
    });
  });
  const d = f({
    get() {
      const y = e[t];
      return a(c.value ? y : i.value);
    },
    set(y) {
      const m = r(y), v = $e(c.value ? e[t] : i.value);
      v === m || a(v) === y || (i.value = m, s?.emit(`update:${t}`, m));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : i.value
  }), d;
}
const yc = A({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), _c = A({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Sc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Te("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const r = ct();
  Ke(Symbol.for(`${t.description}:id`), r);
  const s = Me(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = W(e, "value"), l = f(() => !!(s.disabled.value || e.disabled));
  s.register({
    id: r,
    value: i,
    disabled: l
  }, a), Ct(() => {
    s.unregister(r);
  });
  const u = f(() => s.isSelected(r)), c = f(() => s.items.value[0].id === r), d = f(() => s.items.value[s.items.value.length - 1].id === r), y = f(() => u.value && [s.selectedClass.value, e.selectedClass]);
  return J(u, (m) => {
    a.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: r,
    isSelected: u,
    isFirst: c,
    isLast: d,
    toggle: () => s.select(r, !u.value),
    select: (m) => s.select(r, m),
    selectedClass: y,
    value: i,
    disabled: l,
    group: s
  };
}
function pc(e, t) {
  let n = !1;
  const a = Ln([]), r = _e(e, "modelValue", [], (m) => m == null ? [] : rl(a, Ie(m)), (m) => {
    const v = kc(a, m);
    return e.multiple ? v : v[0];
  }), s = Te("useGroup");
  function i(m, v) {
    const g = m, h = Symbol.for(`${t.description}:id`), _ = wn(h, s?.vnode).indexOf(v);
    V(g.value) == null && (g.value = _, g.useIndexAsValue = !0), _ > -1 ? a.splice(_, 0, g) : a.push(g);
  }
  function l(m) {
    if (n) return;
    u();
    const v = a.findIndex((g) => g.id === m);
    a.splice(v, 1);
  }
  function u() {
    const m = a.find((v) => !v.disabled);
    m && e.mandatory === "force" && !r.value.length && (r.value = [m.id]);
  }
  sn(() => {
    u();
  }), Ct(() => {
    n = !0;
  }), lu(() => {
    for (let m = 0; m < a.length; m++)
      a[m].useIndexAsValue && (a[m].value = m);
  });
  function c(m, v) {
    const g = a.find((h) => h.id === m);
    if (!(v && g?.disabled))
      if (e.multiple) {
        const h = r.value.slice(), S = h.findIndex((x) => x === m), _ = ~S;
        if (v = v ?? !_, _ && e.mandatory && h.length <= 1 || !_ && e.max != null && h.length + 1 > e.max) return;
        S < 0 && v ? h.push(m) : S >= 0 && !v && h.splice(S, 1), r.value = h;
      } else {
        const h = r.value.includes(m);
        if (e.mandatory && h) return;
        r.value = v ?? !h ? [m] : [];
      }
  }
  function d(m) {
    if (e.multiple && Jt('This method is not supported when using "multiple" prop'), r.value.length) {
      const v = r.value[0], g = a.findIndex((_) => _.id === v);
      let h = (g + m) % a.length, S = a[h];
      for (; S.disabled && h !== g; )
        h = (h + m) % a.length, S = a[h];
      if (S.disabled) return;
      r.value = [a[h].id];
    } else {
      const v = a.find((g) => !g.disabled);
      v && (r.value = [v.id]);
    }
  }
  const y = {
    register: i,
    unregister: l,
    selected: r,
    select: c,
    disabled: W(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (m) => r.value.includes(m),
    selectedClass: f(() => e.selectedClass),
    items: f(() => a),
    getItemIndex: (m) => bc(a, m)
  };
  return Ke(t, y), y;
}
function bc(e, t) {
  const n = rl(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function rl(e, t) {
  const n = [];
  return t.forEach((a) => {
    const r = e.find((i) => Bn(a, i.value)), s = e[a];
    r?.value != null ? n.push(r.id) : s != null && n.push(s.id);
  }), n;
}
function kc(e, t) {
  const n = [];
  return t.forEach((a) => {
    const r = e.findIndex((s) => s.id === a);
    if (~r) {
      const s = e[r];
      n.push(s.value != null ? s.value : r);
    }
  }), n;
}
const sl = Symbol.for("vuetify:v-btn-toggle"), wc = A({
  ...al(),
  ...yc()
}, "VBtnToggle");
B()({
  name: "VBtnToggle",
  props: wc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: r,
      prev: s,
      select: i,
      selected: l
    } = pc(e, sl);
    return z(() => {
      const u = ti.filterProps(e);
      return o(ti, K({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: a,
          next: r,
          prev: s,
          select: i,
          selected: l
        })]
      });
    }), {
      next: r,
      prev: s,
      select: i
    };
  }
});
const Cc = A({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Pe = B(!1)({
  name: "VDefaultsProvider",
  props: Cc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: r,
      reset: s,
      root: i,
      scoped: l
    } = Ii(e);
    return Wn(a, {
      reset: s,
      root: i,
      scoped: l,
      disabled: r
    }), () => n.default?.();
  }
}), ye = [String, Function, Object, Array], Pc = Symbol.for("vuetify:icons"), Da = A({
  icon: {
    type: ye
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), ni = B()({
  name: "VComponentIcon",
  props: Da(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return o(e.tag, null, {
        default: () => [e.icon ? o(a, null, null) : n.default?.()]
      });
    };
  }
}), xc = Un({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Da(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => o(e.tag, K(n, {
      style: null
    }), {
      default: () => [o("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? o("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : o("path", {
        d: a
      }, null)) : o("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Un({
  name: "VLigatureIcon",
  props: Da(),
  setup(e) {
    return () => o(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
Un({
  name: "VClassIcon",
  props: Da(),
  setup(e) {
    return () => o(e.tag, {
      class: e.icon
    }, null);
  }
});
const Mc = (e) => {
  const t = Me(Pc);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      const a = V(e);
      if (!a) return {
        component: ni
      };
      let r = a;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = t.aliases?.[r.slice(1)])), r || Jt(`Could not find aliased icon "${a}"`), Array.isArray(r))
        return {
          component: xc,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: ni,
          icon: r
        };
      const s = Object.keys(t.sets).find((u) => typeof r == "string" && r.startsWith(`${u}:`)), i = s ? r.slice(s.length + 1) : r;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: i
      };
    })
  };
}, Tc = ["x-small", "small", "default", "large", "x-large"], Oa = A({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return Fr(() => {
    let n, a;
    return oa(Tc, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: q(e.size),
      height: q(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const Dc = A({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ye,
  ...ee(),
  ...Oa(),
  ...Ce({
    tag: "i"
  }),
  ...Ee()
}, "VIcon"), lt = B()({
  name: "VIcon",
  props: Dc(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = H(), {
      themeClasses: s
    } = Re(e), {
      iconData: i
    } = Mc(f(() => r.value || e.icon)), {
      sizeClasses: l
    } = Ea(e), {
      textColorClasses: u,
      textColorStyles: c
    } = kt(W(e, "color"));
    return z(() => {
      const d = a.default?.();
      d && (r.value = Ki(d).filter((m) => m.type === ou && m.children && typeof m.children == "string")[0]?.children);
      const y = !!(n.onClick || n.onClickOnce);
      return o(i.value.component, {
        tag: e.tag,
        icon: i.value.icon,
        class: ["v-icon", "notranslate", s.value, l.value, u.value, {
          "v-icon--clickable": y,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: q(e.size),
          height: q(e.size),
          width: q(e.size)
        }, c.value, e.style],
        role: y ? "button" : void 0,
        "aria-hidden": !y,
        tabindex: y ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function il(e, t) {
  const n = H(), a = se(!1);
  if (Yr) {
    const r = new IntersectionObserver((s) => {
      a.value = !!s.find((i) => i.isIntersecting);
    }, t);
    Ct(() => {
      r.disconnect();
    }), J(n, (s, i) => {
      i && (r.unobserve(i), a.value = !1), s && r.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
function Oc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = da(), a = H();
  if (We) {
    const r = new ResizeObserver((s) => {
      s.length && (t === "content" ? a.value = s[0].contentRect : a.value = s[0].target.getBoundingClientRect());
    });
    Ct(() => {
      r.disconnect();
    }), J(() => n.el, (s, i) => {
      i && (r.unobserve(i), a.value = void 0), s && r.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ar(a)
  };
}
const Ec = A({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...ee(),
  ...Oa(),
  ...Ce({
    tag: "div"
  }),
  ...Ee()
}, "VProgressCircular"), Ac = B()({
  name: "VProgressCircular",
  props: Ec(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, r = 2 * Math.PI * a, s = H(), {
      themeClasses: i
    } = Re(e), {
      sizeClasses: l,
      sizeStyles: u
    } = Ea(e), {
      textColorClasses: c,
      textColorStyles: d
    } = kt(W(e, "color")), {
      textColorClasses: y,
      textColorStyles: m
    } = kt(W(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: g
    } = il(), {
      resizeRef: h,
      contentRect: S
    } = Oc(), _ = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = f(() => Number(e.width)), D = f(() => u.value ? Number(e.size) : S.value ? S.value.width : Math.max(x.value, 32)), k = f(() => a / (1 - x.value / D.value) * 2), P = f(() => x.value / D.value * k.value), E = f(() => q((100 - _.value) / 100 * r));
    return Vt(() => {
      v.value = s.value, h.value = s.value;
    }), z(() => o(e.tag, {
      ref: s,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, i.value, l.value, c.value, e.class],
      style: [u.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : _.value
    }, {
      default: () => [o("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${k.value} ${k.value}`
      }, [o("circle", {
        class: ["v-progress-circular__underlay", y.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), o("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": E.value
      }, null)]), n.default && o("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: _.value
      })])]
    })), {};
  }
}), Rt = A({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Yt(e) {
  return {
    dimensionStyles: f(() => {
      const n = {}, a = q(e.height), r = q(e.maxHeight), s = q(e.maxWidth), i = q(e.minHeight), l = q(e.minWidth), u = q(e.width);
      return a != null && (n.height = a), r != null && (n.maxHeight = r), s != null && (n.maxWidth = s), i != null && (n.minHeight = i), l != null && (n.minWidth = l), u != null && (n.width = u), n;
    })
  };
}
const ll = Symbol.for("vuetify:locale");
function Hr() {
  const e = Me(ll);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function vn() {
  const e = Me(ll);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const ai = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Aa = A({
  location: String
}, "location");
function Va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = vn();
  return {
    locationStyles: f(() => {
      if (!e.location) return {};
      const {
        side: s,
        align: i
      } = fr(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function l(c) {
        return n ? n(c) : 0;
      }
      const u = {};
      return s !== "center" && (t ? u[ai[s]] = `calc(100% - ${l(s)}px)` : u[s] = 0), i !== "center" ? t ? u[ai[i]] = `calc(100% - ${l(i)}px)` : u[i] = 0 : (s === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[s]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[s]), u;
    })
  };
}
const Vc = A({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...ee(),
  ...Aa({
    location: "top"
  }),
  ...dt(),
  ...Ce(),
  ...Ee()
}, "VProgressLinear"), Ic = B()({
  name: "VProgressLinear",
  props: Vc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), {
      isRtl: r,
      rtlClasses: s
    } = vn(), {
      themeClasses: i
    } = Re(e), {
      locationStyles: l
    } = Va(e), {
      textColorClasses: u,
      textColorStyles: c
    } = kt(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: y
    } = et(f(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: v
    } = et(f(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: g,
      backgroundColorStyles: h
    } = et(e, "color"), {
      roundedClasses: S
    } = ft(e), {
      intersectionRef: _,
      isIntersecting: x
    } = il(), D = f(() => parseFloat(e.max)), k = f(() => parseFloat(e.height)), P = f(() => la(parseFloat(e.bufferValue) / D.value * 100, 0, 100)), E = f(() => la(parseFloat(a.value) / D.value * 100, 0, 100)), w = f(() => r.value !== e.reverse), $ = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function O(F) {
      if (!_.value) return;
      const {
        left: L,
        right: b,
        width: C
      } = _.value.getBoundingClientRect(), R = w.value ? C - F.clientX + (b - C) : F.clientX - L;
      a.value = Math.round(R / C * D.value);
    }
    return z(() => o(e.tag, {
      ref: _,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && x.value,
        "v-progress-linear--reverse": w.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, S.value, i.value, s.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? q(k.value) : 0,
        "--v-progress-linear-height": q(k.value),
        ...e.absolute ? l.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : E.value,
      onClick: e.clickable && O
    }, {
      default: () => [e.stream && o("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: {
          ...c.value,
          [w.value ? "left" : "right"]: q(-k.value),
          borderTop: `${q(k.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${q(k.value / 4)})`,
          width: q(100 - P.value, "%"),
          "--v-progress-linear-stream-to": q(k.value * (w.value ? 1 : -1))
        }
      }, null), o("div", {
        class: ["v-progress-linear__background", d.value],
        style: [y.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), o("div", {
        class: ["v-progress-linear__buffer", m.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: q(P.value, "%")
        }]
      }, null), o(Ut, {
        name: $.value
      }, {
        default: () => [e.indeterminate ? o("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((F) => o("div", {
          key: F,
          class: ["v-progress-linear__indeterminate", F, g.value],
          style: h.value
        }, null))]) : o("div", {
          class: ["v-progress-linear__determinate", g.value],
          style: [h.value, {
            width: q(E.value, "%")
          }]
        }, null)]
      }), n.default && o("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: E.value,
        buffer: P.value
      })])]
    })), {};
  }
}), jr = A({
  loading: [Boolean, String]
}, "loader");
function zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return {
    loaderClasses: f(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function ol(e, t) {
  let {
    slots: n
  } = t;
  return o("div", {
    class: `${e.name}__loader`
  }, [n.default?.({
    color: e.color,
    isActive: e.active
  }) || o(Ic, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Rc = ["static", "relative", "fixed", "absolute", "sticky"], Gr = A({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Rc.includes(e)
    )
  }
}, "position");
function Kr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  return {
    positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Yc() {
  const e = Te("useRoute");
  return f(() => e?.proxy?.$route);
}
function Lc() {
  return Te("useRouter")?.proxy?.$router;
}
function qr(e, t) {
  const n = uu("RouterLink"), a = f(() => !!(e.href || e.to)), r = f(() => a?.value || Fs(t, "click") || Fs(e, "click"));
  if (typeof n == "string" || !("useLink" in n))
    return {
      isLink: a,
      isClickable: r,
      href: W(e, "href")
    };
  const s = f(() => ({
    ...e,
    to: W(() => e.to || "")
  })), i = n.useLink(s.value), l = f(() => e.to ? i : void 0), u = Yc();
  return {
    isLink: a,
    isClickable: r,
    route: l.value?.route,
    navigate: l.value?.navigate,
    isActive: f(() => l.value ? e.exact ? u.value ? l.value.isExactActive?.value && Bn(l.value.route.value.query, u.value.query) : l.value.isExactActive?.value ?? !1 : l.value.isActive?.value ?? !1 : !1),
    href: f(() => e.to ? l.value?.route.value.href : e.href)
  };
}
const Zr = A({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let tr = !1;
function Nc(e, t) {
  let n = !1, a, r;
  We && (Be(() => {
    window.addEventListener("popstate", s), a = e?.beforeEach((i, l, u) => {
      tr ? n ? t(u) : u() : setTimeout(() => n ? t(u) : u()), tr = !0;
    }), r = e?.afterEach(() => {
      tr = !1;
    });
  }), qe(() => {
    window.removeEventListener("popstate", s), a?.(), r?.();
  }));
  function s(i) {
    i.state?.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Fc(e, t) {
  J(() => e.isActive?.value, (n) => {
    e.isLink.value && n && t && Be(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const mr = Symbol("rippleStop"), $c = 80;
function ri(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function hr(e) {
  return e.constructor.name === "TouchEvent";
}
function ul(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Bc = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, r = 0;
  if (!ul(e)) {
    const y = t.getBoundingClientRect(), m = hr(e) ? e.touches[e.touches.length - 1] : e;
    a = m.clientX - y.left, r = m.clientY - y.top;
  }
  let s = 0, i = 0.3;
  t._ripple?.circle ? (i = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((a - s) ** 2 + (r - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - s * 2) / 2}px`, u = `${(t.clientHeight - s * 2) / 2}px`, c = n.center ? l : `${a - s}px`, d = n.center ? u : `${r - s}px`;
  return {
    radius: s,
    scale: i,
    x: c,
    y: d,
    centerX: l,
    centerY: u
  };
}, ha = {
  /* eslint-disable max-statements */
  show(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const a = document.createElement("span"), r = document.createElement("span");
    a.appendChild(r), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: s,
      scale: i,
      x: l,
      y: u,
      centerX: c,
      centerY: d
    } = Bc(e, t, n), y = `${s * 2}px`;
    r.className = "v-ripple__animation", r.style.width = y, r.style.height = y, t.appendChild(a);
    const m = window.getComputedStyle(t);
    m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), ri(r, `translate(${l}, ${u}) scale3d(${i},${i},${i})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
      r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), ri(r, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), r = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function cl(e) {
  return typeof e > "u" || !!e;
}
function Dn(e) {
  const t = {}, n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[mr])) {
    if (e[mr] = !0, hr(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || ul(e), n._ripple.class && (t.class = n._ripple.class), hr(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        ha.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, $c);
    } else
      ha.show(e, n, t);
  }
}
function si(e) {
  e[mr] = !0;
}
function Ne(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Ne(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), ha.hide(t);
  }
}
function dl(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let On = !1;
function fl(e) {
  !On && (e.keyCode === Ys.enter || e.keyCode === Ys.space) && (On = !0, Dn(e));
}
function vl(e) {
  On = !1, Ne(e);
}
function ml(e) {
  On && (On = !1, Ne(e));
}
function hl(e, t, n) {
  const {
    value: a,
    modifiers: r
  } = t, s = cl(a);
  if (s || ha.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = r.center, e._ripple.circle = r.circle, dr(a) && a.class && (e._ripple.class = a.class), s && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", si, {
        passive: !0
      }), e.addEventListener("mousedown", si);
      return;
    }
    e.addEventListener("touchstart", Dn, {
      passive: !0
    }), e.addEventListener("touchend", Ne, {
      passive: !0
    }), e.addEventListener("touchmove", dl, {
      passive: !0
    }), e.addEventListener("touchcancel", Ne), e.addEventListener("mousedown", Dn), e.addEventListener("mouseup", Ne), e.addEventListener("mouseleave", Ne), e.addEventListener("keydown", fl), e.addEventListener("keyup", vl), e.addEventListener("blur", ml), e.addEventListener("dragstart", Ne, {
      passive: !0
    });
  } else !s && n && gl(e);
}
function gl(e) {
  e.removeEventListener("mousedown", Dn), e.removeEventListener("touchstart", Dn), e.removeEventListener("touchend", Ne), e.removeEventListener("touchmove", dl), e.removeEventListener("touchcancel", Ne), e.removeEventListener("mouseup", Ne), e.removeEventListener("mouseleave", Ne), e.removeEventListener("keydown", fl), e.removeEventListener("keyup", vl), e.removeEventListener("dragstart", Ne), e.removeEventListener("blur", ml);
}
function Wc(e, t) {
  hl(e, t, !1);
}
function Uc(e) {
  delete e._ripple, gl(e);
}
function Hc(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = cl(t.oldValue);
  hl(e, t, n);
}
const Ia = {
  mounted: Wc,
  unmounted: Uc,
  updated: Hc
}, jc = A({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: sl
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ye,
  appendIcon: ye,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...on(),
  ...ee(),
  ...Pt(),
  ...Rt(),
  ...cn(),
  ..._c(),
  ...jr(),
  ...Aa(),
  ...Gr(),
  ...dt(),
  ...Zr(),
  ...Oa(),
  ...Ce({
    tag: "button"
  }),
  ...Ee(),
  ...fn({
    variant: "elevated"
  })
}, "VBtn"), le = B()({
  name: "VBtn",
  props: jc(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Re(e), {
      borderClasses: s
    } = un(e), {
      densityClasses: i
    } = It(e), {
      dimensionStyles: l
    } = Yt(e), {
      elevationClasses: u
    } = dn(e), {
      loaderClasses: c
    } = zr(e), {
      locationStyles: d
    } = Va(e), {
      positionClasses: y
    } = Kr(e), {
      roundedClasses: m
    } = ft(e), {
      sizeClasses: v,
      sizeStyles: g
    } = Ea(e), h = Sc(e, e.symbol, !1), S = qr(e, n), _ = f(() => e.active !== void 0 ? e.active : S.isLink.value ? S.isActive?.value : h?.isSelected.value), x = f(() => ({
      color: h?.isSelected.value && (!S.isLink.value || S.isActive?.value) || !h || S.isActive?.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    })), {
      colorClasses: D,
      colorStyles: k,
      variantClasses: P
    } = Ta(x), E = f(() => h?.disabled.value || e.disabled), w = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = f(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function O(F) {
      E.value || S.isLink.value && (F.metaKey || F.ctrlKey || F.shiftKey || F.button !== 0 || n.target === "_blank") || (S.navigate?.(F), h?.toggle());
    }
    return Fc(S, h?.select), z(() => {
      const F = S.isLink.value ? "a" : e.tag, L = !!(e.prependIcon || a.prepend), b = !!(e.appendIcon || a.append), C = !!(e.icon && e.icon !== !0);
      return tt(o(F, {
        type: F === "a" ? void 0 : "button",
        class: ["v-btn", h?.selectedClass.value, {
          "v-btn--active": _.value,
          "v-btn--block": e.block,
          "v-btn--disabled": E.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, r.value, s.value, D.value, i.value, u.value, c.value, y.value, m.value, v.value, P.value, e.class],
        style: [k.value, l.value, d.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: E.value || void 0,
        href: S.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: O,
        value: $.value
      }, {
        default: () => [Ma(!0, "v-btn"), !e.icon && L && o("span", {
          key: "prepend",
          class: "v-btn__prepend"
        }, [a.prepend ? o(Pe, {
          key: "prepend-defaults",
          disabled: !e.prependIcon,
          defaults: {
            VIcon: {
              icon: e.prependIcon
            }
          }
        }, a.prepend) : o(lt, {
          key: "prepend-icon",
          icon: e.prependIcon
        }, null)]), o("span", {
          class: "v-btn__content",
          "data-no-activator": ""
        }, [!a.default && C ? o(lt, {
          key: "content-icon",
          icon: e.icon
        }, null) : o(Pe, {
          key: "content-defaults",
          disabled: !C,
          defaults: {
            VIcon: {
              icon: e.icon
            }
          }
        }, {
          default: () => [a.default?.() ?? e.text]
        })]), !e.icon && b && o("span", {
          key: "append",
          class: "v-btn__append"
        }, [a.append ? o(Pe, {
          key: "append-defaults",
          disabled: !e.appendIcon,
          defaults: {
            VIcon: {
              icon: e.appendIcon
            }
          }
        }, a.append) : o(lt, {
          key: "append-icon",
          icon: e.appendIcon
        }, null)]), !!e.loading && o("span", {
          key: "loader",
          class: "v-btn__loader"
        }, [a.loader?.() ?? o(Ac, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: !0,
          width: "2"
        }, null)])]
      }), [[Ia, !E.value && !!e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), zc = A({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ee(),
  ...Ce()
}, "VContainer"), Gc = B()({
  name: "VContainer",
  props: zc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = vn();
    return z(() => o(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: e.style
    }, n)), {};
  }
}), Ra = ["sm", "md", "lg", "xl", "xxl"], Kc = Symbol.for("vuetify:display");
function qc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  const n = Me(Kc);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = f(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return n.mobile.value;
    const s = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < s;
  }), r = f(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: r,
    mobile: a
  };
}
const yl = Ra.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), _l = Ra.reduce((e, t) => {
  const n = "offset" + Nn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Sl = Ra.reduce((e, t) => {
  const n = "order" + Nn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), ii = {
  col: Object.keys(yl),
  offset: Object.keys(_l),
  order: Object.keys(Sl)
};
function Zc(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const Xc = ["auto", "start", "end", "center", "baseline", "stretch"], Jc = A({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...yl,
  offset: {
    type: [String, Number],
    default: null
  },
  ..._l,
  order: {
    type: [String, Number],
    default: null
  },
  ...Sl,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Xc.includes(e)
  },
  ...ee(),
  ...Ce()
}, "VCol"), ue = B()({
  name: "VCol",
  props: Jc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => {
      const r = [];
      let s;
      for (s in ii)
        ii[s].forEach((l) => {
          const u = e[l], c = Zc(s, l, u);
          c && r.push(c);
        });
      const i = r.some((l) => l.startsWith("v-col-"));
      return r.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !i || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), r;
    });
    return () => rn(e.tag, {
      class: [a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Xr = ["start", "end", "center"], pl = ["space-between", "space-around", "space-evenly"];
function Jr(e, t) {
  return Ra.reduce((n, a) => {
    const r = e + Nn(a);
    return n[r] = t(), n;
  }, {});
}
const Qc = [...Xr, "baseline", "stretch"], bl = (e) => Qc.includes(e), kl = Jr("align", () => ({
  type: String,
  default: null,
  validator: bl
})), ed = [...Xr, ...pl], wl = (e) => ed.includes(e), Cl = Jr("justify", () => ({
  type: String,
  default: null,
  validator: wl
})), td = [...Xr, ...pl, "stretch"], Pl = (e) => td.includes(e), xl = Jr("alignContent", () => ({
  type: String,
  default: null,
  validator: Pl
})), li = {
  align: Object.keys(kl),
  justify: Object.keys(Cl),
  alignContent: Object.keys(xl)
}, nd = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function ad(e, t, n) {
  let a = nd[e];
  if (n != null) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const rd = A({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: bl
  },
  ...kl,
  justify: {
    type: String,
    default: null,
    validator: wl
  },
  ...Cl,
  alignContent: {
    type: String,
    default: null,
    validator: Pl
  },
  ...xl,
  ...ee(),
  ...Ce()
}, "VRow"), de = B()({
  name: "VRow",
  props: rd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => {
      const r = [];
      let s;
      for (s in li)
        li[s].forEach((i) => {
          const l = e[i], u = ad(s, i, l);
          u && r.push(u);
        });
      return r.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), r;
    });
    return () => rn(e.tag, {
      class: ["v-row", a.value, e.class],
      style: e.style
    }, n.default?.());
  }
}), Ya = xa("v-spacer", "div", "VSpacer"), sd = A({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Ue(e, t, n) {
  return B()({
    name: e,
    props: sd({
      mode: n,
      origin: t
    }),
    setup(a, r) {
      let {
        slots: s
      } = r;
      const i = {
        onBeforeEnter(l) {
          a.origin && (l.style.transformOrigin = a.origin);
        },
        onLeave(l) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: y
            } = l;
            l._transitionInitialStyles = {
              position: l.style.position,
              top: l.style.top,
              left: l.style.left,
              width: l.style.width,
              height: l.style.height
            }, l.style.position = "absolute", l.style.top = `${u}px`, l.style.left = `${c}px`, l.style.width = `${d}px`, l.style.height = `${y}px`;
          }
          a.hideOnLeave && l.style.setProperty("display", "none", "important");
        },
        onAfterLeave(l) {
          if (a.leaveAbsolute && l?._transitionInitialStyles) {
            const {
              position: u,
              top: c,
              left: d,
              width: y,
              height: m
            } = l._transitionInitialStyles;
            delete l._transitionInitialStyles, l.style.position = u || "", l.style.top = c || "", l.style.left = d || "", l.style.width = y || "", l.style.height = m || "";
          }
        }
      };
      return () => {
        const l = a.group ? Vr : Ut;
        return rn(l, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : i
        }, s.default);
      };
    }
  });
}
function Ml(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return B()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, r) {
      let {
        slots: s
      } = r;
      const i = a.group ? Vr : Ut;
      return () => rn(i, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, s.default);
    }
  });
}
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Ri(`offset-${n}`);
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        [n]: i.style[n]
      };
    },
    onEnter(i) {
      const l = i._initialStyle;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const u = `${i[a]}px`;
      i.style[n] = "0", i.offsetHeight, i.style.transition = l.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        i.style[n] = u;
      });
    },
    onAfterEnter: s,
    onEnterCancelled: s,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [n]: i.style[n]
      }, i.style.overflow = "hidden", i.style[n] = `${i[a]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
    },
    onAfterLeave: r,
    onLeaveCancelled: r
  };
  function r(i) {
    e && i._parent && i._parent.classList.remove(e), s(i);
  }
  function s(i) {
    const l = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, l != null && (i.style[n] = l), delete i._initialStyle;
  }
}
const id = A({
  target: [Object, Array]
}, "v-dialog-transition"), Dl = B()({
  name: "VDialogTransition",
  props: id(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(r) {
        r.style.pointerEvents = "none", r.style.visibility = "hidden";
      },
      async onEnter(r, s) {
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), r.style.visibility = "";
        const {
          x: i,
          y: l,
          sx: u,
          sy: c,
          speed: d
        } = ui(e.target, r), y = qt(r, [{
          transform: `translate(${i}px, ${l}px) scale(${u}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: cc
        });
        oi(r)?.forEach((m) => {
          qt(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: va
          });
        }), y.finished.then(() => s());
      },
      onAfterEnter(r) {
        r.style.removeProperty("pointer-events");
      },
      onBeforeLeave(r) {
        r.style.pointerEvents = "none";
      },
      async onLeave(r, s) {
        await new Promise((m) => requestAnimationFrame(m));
        const {
          x: i,
          y: l,
          sx: u,
          sy: c,
          speed: d
        } = ui(e.target, r);
        qt(r, [{}, {
          transform: `translate(${i}px, ${l}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: dc
        }).finished.then(() => s()), oi(r)?.forEach((m) => {
          qt(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: va
          });
        });
      },
      onAfterLeave(r) {
        r.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? o(Ut, K({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : o(Ut, {
      name: "dialog-transition"
    }, n);
  }
});
function oi(e) {
  const t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return t && [...t];
}
function ui(e, t) {
  const n = Qi(e), a = $r(t), [r, s] = getComputedStyle(t).transformOrigin.split(" ").map((_) => parseFloat(_)), [i, l] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = n.left + n.width / 2;
  i === "left" || l === "left" ? u -= n.width / 2 : (i === "right" || l === "right") && (u += n.width / 2);
  let c = n.top + n.height / 2;
  i === "top" || l === "top" ? c -= n.height / 2 : (i === "bottom" || l === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, y = n.height / a.height, m = Math.max(1, d, y), v = d / m || 0, g = y / m || 0, h = a.width * a.height / (window.innerWidth * window.innerHeight), S = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: u - (r + a.left),
    y: c - (s + a.top),
    sx: v,
    sy: g,
    speed: S
  };
}
Ue("fab-transition", "center center", "out-in");
Ue("dialog-bottom-transition");
Ue("dialog-top-transition");
const ld = Ue("fade-transition");
Ue("scale-transition");
Ue("scroll-x-transition");
Ue("scroll-x-reverse-transition");
Ue("scroll-y-transition");
Ue("scroll-y-reverse-transition");
Ue("slide-x-transition");
Ue("slide-x-reverse-transition");
const Ol = Ue("slide-y-transition");
Ue("slide-y-reverse-transition");
const od = Ml("expand-transition", Tl()), ud = Ml("expand-x-transition", Tl("", !0)), gr = Symbol.for("vuetify:list");
function El() {
  const e = Me(gr, {
    hasPrepend: se(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: se(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return Ke(gr, t), e;
}
function Al() {
  return Me(gr, null);
}
const Qr = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: r,
        activated: s
      } = n;
      return a = $e(a), e && !r && s.size === 1 && s.has(a) || (r ? s.add(a) : s.delete(a)), s;
    },
    in: (n, a, r) => {
      let s = /* @__PURE__ */ new Set();
      if (n != null)
        for (const i of Ie(n))
          s = t.activate({
            id: i,
            value: !0,
            activated: new Set(s),
            children: a,
            parents: r
          });
      return s;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, Vl = (e) => {
  const t = Qr(e);
  return {
    activate: (a) => {
      let {
        activated: r,
        id: s,
        ...i
      } = a;
      s = $e(s);
      const l = r.has(s) ? /* @__PURE__ */ new Set([s]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...i,
        id: s,
        activated: l
      });
    },
    in: (a, r, s) => {
      let i = /* @__PURE__ */ new Set();
      if (a != null) {
        const l = Ie(a);
        l.length && (i = t.in(l.slice(0, 1), r, s));
      }
      return i;
    },
    out: (a, r, s) => t.out(a, r, s)
  };
}, cd = (e) => {
  const t = Qr(e);
  return {
    activate: (a) => {
      let {
        id: r,
        activated: s,
        children: i,
        ...l
      } = a;
      return r = $e(r), i.has(r) ? s : t.activate({
        id: r,
        activated: s,
        children: i,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, dd = (e) => {
  const t = Vl(e);
  return {
    activate: (a) => {
      let {
        id: r,
        activated: s,
        children: i,
        ...l
      } = a;
      return r = $e(r), i.has(r) ? s : t.activate({
        id: r,
        activated: s,
        children: i,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, fd = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      const s = /* @__PURE__ */ new Set();
      s.add(t);
      let i = r.get(t);
      for (; i != null; )
        s.add(i), i = r.get(i);
      return s;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, Il = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      let s = r.get(t);
      for (a.add(t); s != null && s !== t; )
        a.add(s), s = r.get(s);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, vd = {
  open: Il.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (!n) return a;
    const s = [];
    let i = r.get(t);
    for (; i != null; )
      s.push(i), i = r.get(i);
    return new Set(s);
  }
}, es = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: s
      } = n;
      if (a = $e(a), e && !r) {
        const i = Array.from(s.entries()).reduce((l, u) => {
          let [c, d] = u;
          return d === "on" && l.push(c), l;
        }, []);
        if (i.length === 1 && i[0] === a) return s;
      }
      return s.set(a, r ? "on" : "off"), s;
    },
    in: (n, a, r) => {
      let s = /* @__PURE__ */ new Map();
      for (const i of n || [])
        s = t.select({
          id: i,
          value: !0,
          selected: new Map(s),
          children: a,
          parents: r
        });
      return s;
    },
    out: (n) => {
      const a = [];
      for (const [r, s] of n.entries())
        s === "on" && a.push(r);
      return a;
    }
  };
  return t;
}, Rl = (e) => {
  const t = es(e);
  return {
    select: (a) => {
      let {
        selected: r,
        id: s,
        ...i
      } = a;
      s = $e(s);
      const l = r.has(s) ? /* @__PURE__ */ new Map([[s, r.get(s)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...i,
        id: s,
        selected: l
      });
    },
    in: (a, r, s) => {
      let i = /* @__PURE__ */ new Map();
      return a?.length && (i = t.in(a.slice(0, 1), r, s)), i;
    },
    out: (a, r, s) => t.out(a, r, s)
  };
}, md = (e) => {
  const t = es(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: s,
        children: i,
        ...l
      } = a;
      return r = $e(r), i.has(r) ? s : t.select({
        id: r,
        selected: s,
        children: i,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, hd = (e) => {
  const t = Rl(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: s,
        children: i,
        ...l
      } = a;
      return r = $e(r), i.has(r) ? s : t.select({
        id: r,
        selected: s,
        children: i,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, gd = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: s,
        children: i,
        parents: l
      } = n;
      a = $e(a);
      const u = new Map(s), c = [a];
      for (; c.length; ) {
        const y = c.shift();
        s.set(y, r ? "on" : "off"), i.has(y) && c.push(...i.get(y));
      }
      let d = l.get(a);
      for (; d; ) {
        const y = i.get(d), m = y.every((g) => s.get(g) === "on"), v = y.every((g) => !s.has(g) || s.get(g) === "off");
        s.set(d, m ? "on" : v ? "off" : "indeterminate"), d = l.get(d);
      }
      return e && !r && Array.from(s.entries()).reduce((m, v) => {
        let [g, h] = v;
        return h === "on" && m.push(g), m;
      }, []).length === 0 ? u : s;
    },
    in: (n, a, r) => {
      let s = /* @__PURE__ */ new Map();
      for (const i of n || [])
        s = t.select({
          id: i,
          value: !0,
          selected: new Map(s),
          children: a,
          parents: r
        });
      return s;
    },
    out: (n, a) => {
      const r = [];
      for (const [s, i] of n.entries())
        i === "on" && !a.has(s) && r.push(s);
      return r;
    }
  };
  return t;
}, En = Symbol.for("vuetify:nested"), Yl = {
  id: se(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: H(/* @__PURE__ */ new Map()),
    children: H(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: H(!1),
    selectable: H(!1),
    opened: H(/* @__PURE__ */ new Set()),
    activated: H(/* @__PURE__ */ new Set()),
    selected: H(/* @__PURE__ */ new Map()),
    selectedValues: H([])
  }
}, yd = A({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), _d = (e) => {
  let t = !1;
  const n = H(/* @__PURE__ */ new Map()), a = H(/* @__PURE__ */ new Map()), r = _e(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), s = f(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return cd(e.mandatory);
      case "single-leaf":
        return dd(e.mandatory);
      case "independent":
        return Qr(e.mandatory);
      case "single-independent":
      default:
        return Vl(e.mandatory);
    }
  }), i = f(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return hd(e.mandatory);
      case "leaf":
        return md(e.mandatory);
      case "independent":
        return es(e.mandatory);
      case "single-independent":
        return Rl(e.mandatory);
      case "classic":
      default:
        return gd(e.mandatory);
    }
  }), l = f(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return vd;
      case "single":
        return fd;
      case "multiple":
      default:
        return Il;
    }
  }), u = _e(e, "activated", e.activated, (v) => s.value.in(v, n.value, a.value), (v) => s.value.out(v, n.value, a.value)), c = _e(e, "selected", e.selected, (v) => i.value.in(v, n.value, a.value), (v) => i.value.out(v, n.value, a.value));
  Ct(() => {
    t = !0;
  });
  function d(v) {
    const g = [];
    let h = v;
    for (; h != null; )
      g.unshift(h), h = a.value.get(h);
    return g;
  }
  const y = Te("nested"), m = {
    id: se(),
    root: {
      opened: r,
      activatable: W(e, "activatable"),
      selectable: W(e, "selectable"),
      activated: u,
      selected: c,
      selectedValues: f(() => {
        const v = [];
        for (const [g, h] of c.value.entries())
          h === "on" && v.push(g);
        return v;
      }),
      register: (v, g, h) => {
        g && v !== g && a.value.set(v, g), h && n.value.set(v, []), g != null && n.value.set(g, [...n.value.get(g) || [], v]);
      },
      unregister: (v) => {
        if (t) return;
        n.value.delete(v);
        const g = a.value.get(v);
        if (g) {
          const h = n.value.get(g) ?? [];
          n.value.set(g, h.filter((S) => S !== v));
        }
        a.value.delete(v), r.value.delete(v);
      },
      open: (v, g, h) => {
        y.emit("click:open", {
          id: v,
          value: g,
          path: d(v),
          event: h
        });
        const S = l.value.open({
          id: v,
          value: g,
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        S && (r.value = S);
      },
      openOnSelect: (v, g, h) => {
        const S = l.value.select({
          id: v,
          value: g,
          selected: new Map(c.value),
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        S && (r.value = S);
      },
      select: (v, g, h) => {
        y.emit("click:select", {
          id: v,
          value: g,
          path: d(v),
          event: h
        });
        const S = i.value.select({
          id: v,
          value: g,
          selected: new Map(c.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        S && (c.value = S), m.root.openOnSelect(v, g, h);
      },
      activate: (v, g, h) => {
        if (!e.activatable)
          return m.root.select(v, !0, h);
        y.emit("click:activate", {
          id: v,
          value: g,
          path: d(v),
          event: h
        });
        const S = s.value.activate({
          id: v,
          value: g,
          activated: new Set(u.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        S && (u.value = S);
      },
      children: n,
      parents: a
    }
  };
  return Ke(En, m), m.root;
}, Ll = (e, t) => {
  const n = Me(En, Yl), a = Symbol(ct()), r = f(() => e.value !== void 0 ? e.value : a), s = {
    ...n,
    id: r,
    open: (i, l) => n.root.open(r.value, i, l),
    openOnSelect: (i, l) => n.root.openOnSelect(r.value, i, l),
    isOpen: f(() => n.root.opened.value.has(r.value)),
    parent: f(() => n.root.parents.value.get(r.value)),
    activate: (i, l) => n.root.activate(r.value, i, l),
    isActivated: f(() => n.root.activated.value.has($e(r.value))),
    select: (i, l) => n.root.select(r.value, i, l),
    isSelected: f(() => n.root.selected.value.get($e(r.value)) === "on"),
    isIndeterminate: f(() => n.root.selected.value.get(r.value) === "indeterminate"),
    isLeaf: f(() => !n.root.children.value.get(r.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(r.value, n.id.value, t), Ct(() => {
    !n.isGroupActivator && n.root.unregister(r.value);
  }), t && Ke(En, s), s;
}, Sd = () => {
  const e = Me(En, Yl);
  Ke(En, {
    ...e,
    isGroupActivator: !0
  });
};
function pd() {
  const e = se(!1);
  return sn(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: f(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Ar(e)
  };
}
const La = A({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), it = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: r,
    group: s,
    ...i
  } = e, {
    component: l = s ? Vr : Ut,
    ...u
  } = typeof a == "object" ? a : {};
  return rn(l, K(typeof a == "string" ? {
    name: r ? "" : a
  } : u, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: r,
    group: s
  }).filter((c) => {
    let [d, y] = c;
    return y !== void 0;
  })), i), n);
}, bd = Un({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Sd(), () => n.default?.();
  }
}), kd = A({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ye,
    default: "$collapse"
  },
  expandIcon: {
    type: ye,
    default: "$expand"
  },
  prependIcon: ye,
  appendIcon: ye,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ee(),
  ...Ce()
}, "VListGroup"), ci = B()({
  name: "VListGroup",
  props: kd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: r,
      id: s
    } = Ll(W(e, "value"), !0), i = f(() => `v-list-group--id-${String(s.value)}`), l = Al(), {
      isBooted: u
    } = pd();
    function c(v) {
      v.stopPropagation(), r(!a.value, v);
    }
    const d = f(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: i.value
    })), y = f(() => a.value ? e.collapseIcon : e.expandIcon), m = f(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && y.value,
        appendIcon: e.appendIcon || !e.subgroup && y.value,
        title: e.title,
        value: e.value
      }
    }));
    return z(() => o(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": l?.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && o(Pe, {
        defaults: m.value
      }, {
        default: () => [o(bd, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), o(it, {
        transition: {
          component: od
        },
        disabled: !u.value
      }, {
        default: () => [tt(o("div", {
          class: "v-list-group__items",
          role: "group",
          "aria-labelledby": i.value
        }, [n.default?.()]), [[Fn, a.value]])]
      })]
    })), {
      isOpen: a
    };
  }
}), wd = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VListItemSubtitle"), Cd = B()({
  name: "VListItemSubtitle",
  props: wd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Nl = xa("v-list-item-title");
function Pd(e) {
  return {
    aspectStyles: f(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Fl = A({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ee(),
  ...Rt()
}, "VResponsive"), di = B()({
  name: "VResponsive",
  props: Fl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Pd(e), {
      dimensionStyles: r
    } = Yt(e);
    return z(() => o("div", {
      class: ["v-responsive", {
        "v-responsive--inline": e.inline
      }, e.class],
      style: [r.value, e.style]
    }, [o("div", {
      class: "v-responsive__sizer",
      style: a.value
    }, null), n.additional?.(), n.default && o("div", {
      class: ["v-responsive__content", e.contentClass]
    }, [n.default()])])), {};
  }
});
function xd(e, t) {
  if (!Yr) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: r,
    options: s
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, i = new IntersectionObserver(function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const c = e._observe?.[t.instance.$.uid];
    if (!c) return;
    const d = l.some((y) => y.isIntersecting);
    r && (!n.quiet || c.init) && (!n.once || d || c.init) && r(d, l, u), d && n.once ? $l(e, t) : c.init = !0;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: i
  }, i.observe(e);
}
function $l(e, t) {
  const n = e._observe?.[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Bl = {
  mounted: xd,
  unmounted: $l
}, Md = A({
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Fl(),
  ...ee(),
  ...dt(),
  ...La()
}, "VImg"), Wl = B()({
  name: "VImg",
  directives: {
    intersect: Bl
  },
  props: Md(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = et(W(e, "color")), {
      roundedClasses: i
    } = ft(e), l = Te("VImg"), u = se(""), c = H(), d = se(e.eager ? "loading" : "idle"), y = se(), m = se(), v = f(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = f(() => v.value.aspect || y.value / m.value || 0);
    J(() => e.src, () => {
      h(d.value !== "idle");
    }), J(g, (b, C) => {
      !b && C && c.value && k(c.value);
    }), Ir(() => h());
    function h(b) {
      if (!(e.eager && b) && !(Yr && !b && !e.eager)) {
        if (d.value = "loading", v.value.lazySrc) {
          const C = new Image();
          C.src = v.value.lazySrc, k(C, null);
        }
        v.value.src && Be(() => {
          n("loadstart", c.value?.currentSrc || v.value.src), setTimeout(() => {
            if (!l.isUnmounted)
              if (c.value?.complete) {
                if (c.value.naturalWidth || _(), d.value === "error") return;
                g.value || k(c.value, null), d.value === "loading" && S();
              } else
                g.value || k(c.value), x();
          });
        });
      }
    }
    function S() {
      l.isUnmounted || (x(), k(c.value), d.value = "loaded", n("load", c.value?.currentSrc || v.value.src));
    }
    function _() {
      l.isUnmounted || (d.value = "error", n("error", c.value?.currentSrc || v.value.src));
    }
    function x() {
      const b = c.value;
      b && (u.value = b.currentSrc || b.src);
    }
    let D = -1;
    Ct(() => {
      clearTimeout(D);
    });
    function k(b) {
      let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const R = () => {
        if (clearTimeout(D), l.isUnmounted) return;
        const {
          naturalHeight: U,
          naturalWidth: j
        } = b;
        U || j ? (y.value = j, m.value = U) : !b.complete && d.value === "loading" && C != null ? D = window.setTimeout(R, C) : (b.currentSrc.endsWith(".svg") || b.currentSrc.startsWith("data:image/svg+xml")) && (y.value = 1, m.value = 1);
      };
      R();
    }
    const P = f(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), E = () => {
      if (!v.value.src || d.value === "idle") return null;
      const b = o("img", {
        class: ["v-img__img", P.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: S,
        onError: _
      }, null), C = a.sources?.();
      return o(it, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [tt(C ? o("picture", {
          class: "v-img__picture"
        }, [C, b]) : b, [[Fn, d.value === "loaded"]])]
      });
    }, w = () => o(it, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && d.value !== "loaded" && o("img", {
        class: ["v-img__img", "v-img__img--preload", P.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), $ = () => a.placeholder ? o(it, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && o("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, O = () => a.error ? o(it, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && o("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, F = () => e.gradient ? o("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, L = se(!1);
    {
      const b = J(g, (C) => {
        C && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            L.value = !0;
          });
        }), b());
      });
    }
    return z(() => {
      const b = di.filterProps(e);
      return tt(o(di, K({
        class: ["v-img", {
          "v-img--booting": !L.value
        }, r.value, i.value, e.class],
        style: [{
          width: q(e.width === "auto" ? y.value : e.width)
        }, s.value, e.style]
      }, b, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => o(Ae, null, [o(E, null, null), o(w, null, null), o(F, null, null), o($, null, null), o(O, null, null)]),
        default: a.default
      }), [[ln("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: c,
      state: d,
      naturalWidth: y,
      naturalHeight: m
    };
  }
}), Td = A({
  start: Boolean,
  end: Boolean,
  icon: ye,
  image: String,
  text: String,
  ...ee(),
  ...Pt(),
  ...dt(),
  ...Oa(),
  ...Ce(),
  ...Ee(),
  ...fn({
    variant: "flat"
  })
}, "VAvatar"), ga = B()({
  name: "VAvatar",
  props: Td(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: i
    } = Ta(e), {
      densityClasses: l
    } = It(e), {
      roundedClasses: u
    } = ft(e), {
      sizeClasses: c,
      sizeStyles: d
    } = Ea(e);
    return z(() => o(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, r.value, l.value, u.value, c.value, i.value, e.class],
      style: [s.value, d.value, e.style]
    }, {
      default: () => [n.default ? o(Pe, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? o(Wl, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? o(lt, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ma(!1, "v-avatar")]
    })), {};
  }
}), Dd = A({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ye,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Fe(),
  onClickOnce: Fe(),
  ...on(),
  ...ee(),
  ...Pt(),
  ...Rt(),
  ...cn(),
  ...dt(),
  ...Zr(),
  ...Ce(),
  ...Ee(),
  ...fn({
    variant: "text"
  })
}, "VListItem"), yr = B()({
  name: "VListItem",
  directives: {
    Ripple: Ia
  },
  props: Dd(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const s = qr(e, n), i = f(() => e.value === void 0 ? s.href.value : e.value), {
      activate: l,
      isActivated: u,
      select: c,
      isSelected: d,
      isIndeterminate: y,
      isGroupActivator: m,
      root: v,
      parent: g,
      openOnSelect: h
    } = Ll(i, !1), S = Al(), _ = f(() => e.active !== !1 && (e.active || s.isActive?.value || (v.activatable.value ? u.value : d.value))), x = f(() => e.link !== !1 && s.isLink.value), D = f(() => !e.disabled && e.link !== !1 && (e.link || s.isClickable.value || !!S && (v.selectable.value || v.activatable.value || e.value != null))), k = f(() => e.rounded || e.nav), P = f(() => e.color ?? e.activeColor), E = f(() => ({
      color: _.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    J(() => s.isActive?.value, (ne) => {
      ne && g.value != null && v.open(g.value, !0), ne && h(ne);
    }, {
      immediate: !0
    });
    const {
      themeClasses: w
    } = Re(e), {
      borderClasses: $
    } = un(e), {
      colorClasses: O,
      colorStyles: F,
      variantClasses: L
    } = Ta(E), {
      densityClasses: b
    } = It(e), {
      dimensionStyles: C
    } = Yt(e), {
      elevationClasses: R
    } = dn(e), {
      roundedClasses: U
    } = ft(k), j = f(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ce = f(() => ({
      isActive: _.value,
      select: c,
      isSelected: d.value,
      isIndeterminate: y.value
    }));
    function te(ne) {
      r("click", ne), D.value && (s.navigate?.(ne), !m && (v.activatable.value ? l(!u.value, ne) : (v.selectable.value || e.value != null) && c(!d.value, ne)));
    }
    function pe(ne) {
      (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), te(ne));
    }
    return z(() => {
      const ne = x.value ? "a" : e.tag, we = a.title || e.title != null, Ye = a.subtitle || e.subtitle != null, Le = !!(e.appendAvatar || e.appendIcon), Je = !!(Le || a.append), Tt = !!(e.prependAvatar || e.prependIcon), oe = !!(Tt || a.prepend);
      return S?.updateHasPrepend(oe), e.activeColor && tc("active-color", ["color", "base-color"]), tt(o(ne, {
        class: ["v-list-item", {
          "v-list-item--active": _.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": D.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !oe && S?.hasPrepend.value,
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && _.value
        }, w.value, $.value, O.value, b.value, R.value, j.value, U.value, L.value, e.class],
        style: [F.value, C.value, e.style],
        href: s.href.value,
        tabindex: D.value ? S ? -2 : 0 : void 0,
        onClick: te,
        onKeydown: D.value && !x.value && pe
      }, {
        default: () => [Ma(D.value || _.value, "v-list-item"), oe && o("div", {
          key: "prepend",
          class: "v-list-item__prepend"
        }, [a.prepend ? o(Pe, {
          key: "prepend-defaults",
          disabled: !Tt,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            },
            VListItemAction: {
              start: !0
            }
          }
        }, {
          default: () => [a.prepend?.(ce.value)]
        }) : o(Ae, null, [e.prependAvatar && o(ga, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && o(lt, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)]), o("div", {
          class: "v-list-item__spacer"
        }, null)]), o("div", {
          class: "v-list-item__content",
          "data-no-activator": ""
        }, [we && o(Nl, {
          key: "title"
        }, {
          default: () => [a.title?.({
            title: e.title
          }) ?? e.title]
        }), Ye && o(Cd, {
          key: "subtitle"
        }, {
          default: () => [a.subtitle?.({
            subtitle: e.subtitle
          }) ?? e.subtitle]
        }), a.default?.(ce.value)]), Je && o("div", {
          key: "append",
          class: "v-list-item__append"
        }, [a.append ? o(Pe, {
          key: "append-defaults",
          disabled: !Le,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            },
            VListItemAction: {
              end: !0
            }
          }
        }, {
          default: () => [a.append?.(ce.value)]
        }) : o(Ae, null, [e.appendIcon && o(lt, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && o(ga, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)]), o("div", {
          class: "v-list-item__spacer"
        }, null)])]
      }), [[ln("ripple"), D.value && e.ripple]]);
    }), {
      activate: l,
      isActivated: u,
      isGroupActivator: m,
      isSelected: d,
      list: S,
      select: c
    };
  }
}), Od = A({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ee(),
  ...Ce()
}, "VListSubheader"), Ed = B()({
  name: "VListSubheader",
  props: Od(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: r
    } = kt(W(e, "color"));
    return z(() => {
      const s = !!(n.default || e.title);
      return o(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: r
        }, e.style]
      }, {
        default: () => [s && o("div", {
          class: "v-list-subheader__text"
        }, [n.default?.() ?? e.title])]
      });
    }), {};
  }
}), Ad = A({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ee(),
  ...Ee()
}, "VDivider"), Vd = B()({
  name: "VDivider",
  props: Ad(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Re(e), {
      textColorClasses: s,
      textColorStyles: i
    } = kt(W(e, "color")), l = f(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = q(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = q(e.thickness)), u;
    });
    return z(() => {
      const u = o("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, r.value, s.value, e.class],
        style: [l.value, i.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? o("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [u, o("div", {
        class: "v-divider__content"
      }, [a.default()]), u]) : u;
    }), {};
  }
}), Id = A({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Ul = B()({
  name: "VListChildren",
  props: Id(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return El(), () => n.default?.() ?? e.items?.map((a) => {
      let {
        children: r,
        props: s,
        type: i,
        raw: l
      } = a;
      if (i === "divider")
        return n.divider?.({
          props: s
        }) ?? o(Vd, s, null);
      if (i === "subheader")
        return n.subheader?.({
          props: s
        }) ?? o(Ed, s, null);
      const u = {
        subtitle: n.subtitle ? (d) => n.subtitle?.({
          ...d,
          item: l
        }) : void 0,
        prepend: n.prepend ? (d) => n.prepend?.({
          ...d,
          item: l
        }) : void 0,
        append: n.append ? (d) => n.append?.({
          ...d,
          item: l
        }) : void 0,
        title: n.title ? (d) => n.title?.({
          ...d,
          item: l
        }) : void 0
      }, c = ci.filterProps(s);
      return r ? o(ci, K({
        value: s?.value
      }, c), {
        activator: (d) => {
          let {
            props: y
          } = d;
          const m = {
            ...s,
            ...y,
            value: e.returnObject ? l : s.value
          };
          return n.header ? n.header({
            props: m
          }) : o(yr, m, u);
        },
        default: () => o(Ul, {
          items: r,
          returnObject: e.returnObject
        }, n)
      }) : n.item ? n.item({
        props: s
      }) : o(yr, K(s, {
        value: e.returnObject ? l : s.value
      }), u);
    });
  }
}), Rd = A({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: Bn
  }
}, "list-items");
function Yd(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Ld(e, t) {
  const n = Sn(t, e.itemType, "item"), a = Yd(t) ? t : Sn(t, e.itemTitle), r = Sn(t, e.itemValue, void 0), s = Sn(t, e.itemChildren), i = e.itemProps === !0 ? bt(t, ["children"]) : Sn(t, e.itemProps), l = {
    title: a,
    value: r,
    ...i
  };
  return {
    type: n,
    title: l.title,
    value: l.value,
    props: l,
    children: n === "item" && s ? Hl(e, s) : void 0,
    raw: t
  };
}
function Hl(e, t) {
  const n = [];
  for (const a of t)
    n.push(Ld(e, a));
  return n;
}
function Nd(e) {
  return {
    items: f(() => Hl(e, e.items))
  };
}
const Fd = A({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Fe(),
  "onClick:select": Fe(),
  "onUpdate:opened": Fe(),
  ...yd({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...on(),
  ...ee(),
  ...Pt(),
  ...Rt(),
  ...cn(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Rd(),
  ...dt(),
  ...Ce(),
  ...Ee(),
  ...fn({
    variant: "text"
  })
}, "VList"), $d = B()({
  name: "VList",
  props: Fd(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = Nd(e), {
      themeClasses: r
    } = Re(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: i
    } = et(W(e, "bgColor")), {
      borderClasses: l
    } = un(e), {
      densityClasses: u
    } = It(e), {
      dimensionStyles: c
    } = Yt(e), {
      elevationClasses: d
    } = dn(e), {
      roundedClasses: y
    } = ft(e), {
      children: m,
      open: v,
      parents: g,
      select: h
    } = _d(e), S = f(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = W(e, "activeColor"), x = W(e, "baseColor"), D = W(e, "color");
    El(), Wn({
      VListGroup: {
        activeColor: _,
        baseColor: x,
        color: D,
        expandIcon: W(e, "expandIcon"),
        collapseIcon: W(e, "collapseIcon")
      },
      VListItem: {
        activeClass: W(e, "activeClass"),
        activeColor: _,
        baseColor: x,
        color: D,
        density: W(e, "density"),
        disabled: W(e, "disabled"),
        lines: W(e, "lines"),
        nav: W(e, "nav"),
        slim: W(e, "slim"),
        variant: W(e, "variant")
      }
    });
    const k = se(!1), P = H();
    function E(b) {
      k.value = !0;
    }
    function w(b) {
      k.value = !1;
    }
    function $(b) {
      !k.value && !(b.relatedTarget && P.value?.contains(b.relatedTarget)) && L();
    }
    function O(b) {
      const C = b.target;
      if (!(!P.value || ["INPUT", "TEXTAREA"].includes(C.tagName))) {
        if (b.key === "ArrowDown")
          L("next");
        else if (b.key === "ArrowUp")
          L("prev");
        else if (b.key === "Home")
          L("first");
        else if (b.key === "End")
          L("last");
        else
          return;
        b.preventDefault();
      }
    }
    function F(b) {
      k.value = !0;
    }
    function L(b) {
      if (P.value)
        return ca(P.value, b);
    }
    return z(() => o(e.tag, {
      ref: P,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, r.value, s.value, l.value, u.value, d.value, S.value, y.value, e.class],
      style: [i.value, c.value, e.style],
      tabindex: e.disabled || k.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: E,
      onFocusout: w,
      onFocus: $,
      onKeydown: O,
      onMousedown: F
    }, {
      default: () => [o(Ul, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: h,
      focus: L,
      children: m,
      parents: g
    };
  }
});
function nr(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Bd(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function fi(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, r = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return nr({
      x: r,
      y: s
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, r = n === "left" ? 0 : n === "right" ? t.width : n, s = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return nr({
      x: r,
      y: s
    }, t);
  }
  return nr({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const jl = {
  static: Hd,
  // specific viewport position, usually centered
  connected: zd
  // connected to a certain element
}, Wd = A({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in jl
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Ud(e, t) {
  const n = H({}), a = H();
  We && an(() => !!(t.isActive.value && e.locationStrategy), (s) => {
    J(() => e.locationStrategy, s), qe(() => {
      window.removeEventListener("resize", r), a.value = void 0;
    }), window.addEventListener("resize", r, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = e.locationStrategy(t, e, n)?.updateLocation : a.value = jl[e.locationStrategy](t, e, n)?.updateLocation;
  });
  function r(s) {
    a.value?.(s);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function Hd() {
}
function jd(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = $r(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function zd(e, t, n) {
  (Array.isArray(e.target.value) || mc(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: r,
    preferredOrigin: s
  } = Fr(() => {
    const g = fr(t.location, e.isRtl.value), h = t.origin === "overlap" ? g : t.origin === "auto" ? Qa(g) : fr(t.origin, e.isRtl.value);
    return g.side === h.side && g.align === er(h).align ? {
      preferredAnchor: Bs(g),
      preferredOrigin: Bs(h)
    } : {
      preferredAnchor: g,
      preferredOrigin: h
    };
  }), [i, l, u, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => f(() => {
    const h = parseFloat(t[g]);
    return isNaN(h) ? 1 / 0 : h;
  })), d = f(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const g = t.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let y = !1;
  const m = new ResizeObserver(() => {
    y && v();
  });
  J([e.target, e.contentEl], (g, h) => {
    let [S, _] = g, [x, D] = h;
    x && !Array.isArray(x) && m.unobserve(x), S && !Array.isArray(S) && m.observe(S), D && m.unobserve(D), _ && m.observe(_);
  }, {
    immediate: !0
  }), qe(() => {
    m.disconnect();
  });
  function v() {
    if (y = !1, requestAnimationFrame(() => y = !0), !e.target.value || !e.contentEl.value) return;
    const g = Qi(e.target.value), h = jd(e.contentEl.value, e.isRtl.value), S = ma(e.contentEl.value), _ = 12;
    S.length || (S.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const x = S.reduce((L, b) => {
      const C = b.getBoundingClientRect(), R = new Bt({
        x: b === document.documentElement ? 0 : C.x,
        y: b === document.documentElement ? 0 : C.y,
        width: b.clientWidth,
        height: b.clientHeight
      });
      return L ? new Bt({
        x: Math.max(L.left, R.left),
        y: Math.max(L.top, R.top),
        width: Math.min(L.right, R.right) - Math.max(L.left, R.left),
        height: Math.min(L.bottom, R.bottom) - Math.max(L.top, R.top)
      }) : R;
    }, void 0);
    x.x += _, x.y += _, x.width -= _ * 2, x.height -= _ * 2;
    let D = {
      anchor: r.value,
      origin: s.value
    };
    function k(L) {
      const b = new Bt(h), C = fi(L.anchor, g), R = fi(L.origin, b);
      let {
        x: U,
        y: j
      } = Bd(C, R);
      switch (L.anchor.side) {
        case "top":
          j -= d.value[0];
          break;
        case "bottom":
          j += d.value[0];
          break;
        case "left":
          U -= d.value[0];
          break;
        case "right":
          U += d.value[0];
          break;
      }
      switch (L.anchor.align) {
        case "top":
          j -= d.value[1];
          break;
        case "bottom":
          j += d.value[1];
          break;
        case "left":
          U -= d.value[1];
          break;
        case "right":
          U += d.value[1];
          break;
      }
      return b.x += U, b.y += j, b.width = Math.min(b.width, u.value), b.height = Math.min(b.height, c.value), {
        overflows: Us(b, x),
        x: U,
        y: j
      };
    }
    let P = 0, E = 0;
    const w = {
      x: 0,
      y: 0
    }, $ = {
      x: !1,
      y: !1
    };
    let O = -1;
    for (; ; ) {
      if (O++ > 10) {
        ec("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: L,
        y: b,
        overflows: C
      } = k(D);
      P += L, E += b, h.x += L, h.y += b;
      {
        const R = Ws(D.anchor), U = C.x.before || C.x.after, j = C.y.before || C.y.after;
        let ce = !1;
        if (["x", "y"].forEach((te) => {
          if (te === "x" && U && !$.x || te === "y" && j && !$.y) {
            const pe = {
              anchor: {
                ...D.anchor
              },
              origin: {
                ...D.origin
              }
            }, ne = te === "x" ? R === "y" ? er : Qa : R === "y" ? Qa : er;
            pe.anchor = ne(pe.anchor), pe.origin = ne(pe.origin);
            const {
              overflows: we
            } = k(pe);
            (we[te].before <= C[te].before && we[te].after <= C[te].after || we[te].before + we[te].after < (C[te].before + C[te].after) / 2) && (D = pe, ce = $[te] = !0);
          }
        }), ce) continue;
      }
      C.x.before && (P += C.x.before, h.x += C.x.before), C.x.after && (P -= C.x.after, h.x -= C.x.after), C.y.before && (E += C.y.before, h.y += C.y.before), C.y.after && (E -= C.y.after, h.y -= C.y.after);
      {
        const R = Us(h, x);
        w.x = x.width - R.x.before - R.x.after, w.y = x.height - R.y.before - R.y.after, P += R.x.before, h.x += R.x.before, E += R.y.before, h.y += R.y.before;
      }
      break;
    }
    const F = Ws(D.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${D.anchor.side} ${D.anchor.align}`,
      transformOrigin: `${D.origin.side} ${D.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: q(ar(E)),
      left: e.isRtl.value ? void 0 : q(ar(P)),
      right: e.isRtl.value ? q(ar(-P)) : void 0,
      minWidth: q(F === "y" ? Math.min(i.value, g.width) : i.value),
      maxWidth: q(vi(la(w.x, i.value === 1 / 0 ? 0 : i.value, u.value))),
      maxHeight: q(vi(la(w.y, l.value === 1 / 0 ? 0 : l.value, c.value)))
    }), {
      available: w,
      contentBox: h
    };
  }
  return J(() => [r.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => v()), Be(() => {
    const g = v();
    if (!g) return;
    const {
      available: h,
      contentBox: S
    } = g;
    S.height > h.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function ar(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function vi(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let _r = !0;
const ya = [];
function Gd(e) {
  !_r || ya.length ? (ya.push(e), Sr()) : (_r = !1, e(), Sr());
}
let mi = -1;
function Sr() {
  cancelAnimationFrame(mi), mi = requestAnimationFrame(() => {
    const e = ya.shift();
    e && e(), ya.length ? Sr() : _r = !0;
  });
}
const zl = {
  none: null,
  close: Zd,
  block: Xd,
  reposition: Jd
}, Kd = A({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in zl
  }
}, "VOverlay-scroll-strategies");
function qd(e, t) {
  if (!We) return;
  let n;
  Vt(async () => {
    n?.stop(), t.isActive.value && e.scrollStrategy && (n = Er(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : zl[e.scrollStrategy]?.(t, e, n);
    }));
  }), qe(() => {
    n?.stop();
  });
}
function Zd(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Gl(e.targetEl.value ?? e.contentEl.value, t);
}
function Xd(e, t) {
  const n = e.root.value?.offsetParent, a = [.../* @__PURE__ */ new Set([...ma(e.targetEl.value, t.contained ? n : void 0), ...ma(e.contentEl.value, t.contained ? n : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, s = ((i) => Wr(i) && i)(n || document.documentElement);
  s && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((i, l) => {
    i.style.setProperty("--v-body-scroll-x", q(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", q(-i.scrollTop)), i !== document.documentElement && i.style.setProperty("--v-scrollbar-offset", q(r)), i.classList.add("v-overlay-scroll-blocked");
  }), qe(() => {
    a.forEach((i, l) => {
      const u = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(i.style.getPropertyValue("--v-body-scroll-y")), d = i.style.scrollBehavior;
      i.style.scrollBehavior = "auto", i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -u, i.scrollTop = -c, i.style.scrollBehavior = d;
    }), s && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Jd(e, t, n) {
  let a = !1, r = -1, s = -1;
  function i(l) {
    Gd(() => {
      const u = performance.now();
      e.updateLocation.value?.(l), a = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    n.run(() => {
      Gl(e.targetEl.value ?? e.contentEl.value, (l) => {
        a ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            i(l);
          });
        })) : i(l);
      });
    });
  }), qe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(r);
  });
}
function Gl(e, t) {
  const n = [document, ...ma(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), qe(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const pr = Symbol.for("vuetify:v-menu"), Qd = A({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function ef(e, t) {
  let n = () => {
  };
  function a(i) {
    n?.();
    const l = Number(i ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = Wu(l, () => {
        t?.(i), u(i);
      });
    });
  }
  function r() {
    return a(!0);
  }
  function s() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: r,
    runCloseDelay: s
  };
}
const tf = A({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Qd()
}, "VOverlay-activator");
function nf(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const r = Te("useActivator"), s = H();
  let i = !1, l = !1, u = !0;
  const c = f(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = f(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: y,
    runCloseDelay: m
  } = ef(e, (w) => {
    w === (e.openOnHover && i || c.value && l) && !(e.openOnHover && n.value && !a.value) && (n.value !== w && (u = !0), n.value = w);
  }), v = H(), g = {
    onClick: (w) => {
      w.stopPropagation(), s.value = w.currentTarget || w.target, n.value || (v.value = [w.clientX, w.clientY]), n.value = !n.value;
    },
    onMouseenter: (w) => {
      w.sourceCapabilities?.firesTouchEvents || (i = !0, s.value = w.currentTarget || w.target, y());
    },
    onMouseleave: (w) => {
      i = !1, m();
    },
    onFocus: (w) => {
      Xi(w.target, ":focus-visible") !== !1 && (l = !0, w.stopPropagation(), s.value = w.currentTarget || w.target, y());
    },
    onBlur: (w) => {
      l = !1, w.stopPropagation(), m();
    }
  }, h = f(() => {
    const w = {};
    return d.value && (w.onClick = g.onClick), e.openOnHover && (w.onMouseenter = g.onMouseenter, w.onMouseleave = g.onMouseleave), c.value && (w.onFocus = g.onFocus, w.onBlur = g.onBlur), w;
  }), S = f(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      i = !0, y();
    }, w.onMouseleave = () => {
      i = !1, m();
    }), c.value && (w.onFocusin = () => {
      l = !0, y();
    }, w.onFocusout = () => {
      l = !1, m();
    }), e.closeOnContentClick) {
      const $ = Me(pr, null);
      w.onClick = () => {
        n.value = !1, $?.closeParents();
      };
    }
    return w;
  }), _ = f(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (i = !0, u = !1, y());
    }, w.onMouseleave = () => {
      i = !1, m();
    }), w;
  });
  J(a, (w) => {
    w && (e.openOnHover && !i && (!c.value || !l) || c.value && !l && (!e.openOnHover || !i)) && (n.value = !1);
  }), J(n, (w) => {
    w || setTimeout(() => {
      v.value = void 0;
    });
  }, {
    flush: "post"
  });
  const x = da();
  Vt(() => {
    x.value && Be(() => {
      s.value = x.el;
    });
  });
  const D = da(), k = f(() => e.target === "cursor" && v.value ? v.value : D.value ? D.el : Kl(e.target, r) || s.value), P = f(() => Array.isArray(k.value) ? void 0 : k.value);
  let E;
  return J(() => !!e.activator, (w) => {
    w && We ? (E = Er(), E.run(() => {
      af(e, r, {
        activatorEl: s,
        activatorEvents: h
      });
    })) : E && E.stop();
  }, {
    flush: "post",
    immediate: !0
  }), qe(() => {
    E?.stop();
  }), {
    activatorEl: s,
    activatorRef: x,
    target: k,
    targetEl: P,
    targetRef: D,
    activatorEvents: h,
    contentEvents: S,
    scrimEvents: _
  };
}
function af(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: r
  } = n;
  J(() => e.activator, (u, c) => {
    if (c && u !== c) {
      const d = l(c);
      d && i(d);
    }
    u && Be(() => s());
  }, {
    immediate: !0
  }), J(() => e.activatorProps, () => {
    s();
  }), qe(() => {
    i();
  });
  function s() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && ju(u, K(r.value, c));
  }
  function i() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && zu(u, K(r.value, c));
  }
  function l() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Kl(u, t);
    return a.value = c?.nodeType === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Kl(e, t) {
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = t?.proxy?.$el?.parentNode;
    for (; a?.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function rf() {
  if (!We) return se(!1);
  const {
    ssr: e
  } = qc();
  if (e) {
    const t = se(!1);
    return sn(() => {
      t.value = !0;
    }), t;
  } else
    return se(!0);
}
const sf = A({
  eager: Boolean
}, "lazy");
function lf(e, t) {
  const n = se(!1), a = f(() => n.value || e.eager || t.value);
  J(t, () => n.value = !0);
  function r() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: r
  };
}
function ts() {
  const t = Te("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const hi = Symbol.for("vuetify:stack"), pn = Ln([]);
function of(e, t, n) {
  const a = Te("useStack"), r = !n, s = Me(hi, void 0), i = Ln({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ke(hi, i);
  const l = se(+t.value);
  an(e, () => {
    const d = pn.at(-1)?.[1];
    l.value = d ? d + 10 : +t.value, r && pn.push([a.uid, l.value]), s?.activeChildren.add(a.uid), qe(() => {
      if (r) {
        const y = $e(pn).findIndex((m) => m[0] === a.uid);
        pn.splice(y, 1);
      }
      s?.activeChildren.delete(a.uid);
    });
  });
  const u = se(!0);
  r && Vt(() => {
    const d = pn.at(-1)?.[0] === a.uid;
    setTimeout(() => u.value = d);
  });
  const c = f(() => !i.activeChildren.size);
  return {
    globalTop: Ar(u),
    localTop: c,
    stackStyles: f(() => ({
      zIndex: l.value
    }))
  };
}
function uf(e) {
  return {
    teleportTarget: f(() => {
      const n = e.value;
      if (n === !0 || !We) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        Ca(`Unable to locate target ${n}`);
        return;
      }
      let r = a.querySelector(":scope > .v-overlay-container");
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", a.appendChild(r)), r;
    })
  };
}
function cf() {
  return !0;
}
function ql(e, t, n) {
  if (!e || Zl(e, n) === !1) return !1;
  const a = nl(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const r = (typeof n.value == "object" && n.value.include || (() => []))();
  return r.push(t), !r.some((s) => s?.contains(e.target));
}
function Zl(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || cf)(e);
}
function df(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && ql(e, t, n) && setTimeout(() => {
    Zl(e, n) && a && a(e);
  }, 0);
}
function gi(e, t) {
  const n = nl(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const ff = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (r) => df(r, e, t), a = (r) => {
      e._clickOutside.lastMousedownWasOutside = ql(r, e, t);
    };
    gi(e, (r) => {
      r.addEventListener("click", n, !0), r.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (gi(e, (n) => {
      if (!n || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: a,
        onMousedown: r
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", r, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function vf(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return o(Ut, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && o("div", K({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ns = A({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...tf(),
  ...ee(),
  ...Rt(),
  ...sf(),
  ...Wd(),
  ...Kd(),
  ...Ee(),
  ...La()
}, "VOverlay"), An = B()({
  name: "VOverlay",
  directives: {
    ClickOutside: ff
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ns()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: r
    } = t;
    const s = _e(e, "modelValue"), i = f({
      get: () => s.value,
      set: (oe) => {
        oe && e.disabled || (s.value = oe);
      }
    }), {
      themeClasses: l
    } = Re(e), {
      rtlClasses: u,
      isRtl: c
    } = vn(), {
      hasContent: d,
      onAfterLeave: y
    } = lf(e, i), m = et(f(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: v,
      localTop: g,
      stackStyles: h
    } = of(i, W(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: _,
      target: x,
      targetEl: D,
      targetRef: k,
      activatorEvents: P,
      contentEvents: E,
      scrimEvents: w
    } = nf(e, {
      isActive: i,
      isTop: g
    }), $ = f(() => S?.value?.getRootNode()), {
      teleportTarget: O
    } = uf(f(() => e.attach || e.contained || $.value instanceof ShadowRoot ? $.value ?? !0 : !1)), {
      dimensionStyles: F
    } = Yt(e), L = rf(), {
      scopeId: b
    } = ts();
    J(() => e.disabled, (oe) => {
      oe && (i.value = !1);
    });
    const C = H(), R = H(), U = H(), {
      contentStyles: j,
      updateLocation: ce
    } = Ud(e, {
      isRtl: c,
      contentEl: U,
      target: x,
      isActive: i
    });
    qd(e, {
      root: C,
      contentEl: U,
      targetEl: D,
      isActive: i,
      updateLocation: ce
    });
    function te(oe) {
      r("click:outside", oe), e.persistent ? Le() : i.value = !1;
    }
    function pe(oe) {
      return i.value && v.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || oe.target === R.value);
    }
    We && J(i, (oe) => {
      oe ? window.addEventListener("keydown", ne) : window.removeEventListener("keydown", ne);
    }, {
      immediate: !0
    }), Ct(() => {
      We && window.removeEventListener("keydown", ne);
    });
    function ne(oe) {
      oe.key === "Escape" && v.value && (e.persistent ? Le() : (i.value = !1, U.value?.contains(document.activeElement) && S.value?.focus()));
    }
    const we = Lc();
    an(() => e.closeOnBack, () => {
      Nc(we, (oe) => {
        v.value && i.value ? (oe(!1), e.persistent ? Le() : i.value = !1) : oe();
      });
    });
    const Ye = H();
    J(() => i.value && (e.absolute || e.contained) && O.value == null, (oe) => {
      if (oe) {
        const yn = fc(C.value);
        yn && yn !== document.scrollingElement && (Ye.value = yn.scrollTop);
      }
    });
    function Le() {
      e.noClickAnimation || U.value && qt(U.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: va
      });
    }
    function Je() {
      r("afterEnter");
    }
    function Tt() {
      y(), r("afterLeave");
    }
    return z(() => o(Ae, null, [n.activator?.({
      isActive: i.value,
      targetRef: k,
      props: K({
        ref: _
      }, P.value, e.activatorProps)
    }), L.value && d.value && o(cu, {
      disabled: !O.value,
      to: O.value
    }, {
      default: () => [o("div", K({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": i.value,
          "v-overlay--contained": e.contained
        }, l.value, u.value, e.class],
        style: [h.value, {
          "--v-overlay-opacity": e.opacity,
          top: q(Ye.value)
        }, e.style],
        ref: C
      }, b, a), [o(vf, K({
        color: m,
        modelValue: i.value && !!e.scrim,
        ref: R
      }, w.value), null), o(it, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: x.value,
        onAfterEnter: Je,
        onAfterLeave: Tt
      }, {
        default: () => [tt(o("div", K({
          ref: U,
          class: ["v-overlay__content", e.contentClass],
          style: [F.value, j.value]
        }, E.value, e.contentProps), [n.default?.({
          isActive: i
        })]), [[Fn, i.value], [ln("click-outside"), {
          handler: te,
          closeConditional: pe,
          include: () => [S.value]
        }]])]
      })])]
    })])), {
      activatorEl: S,
      scrimEl: R,
      target: x,
      animateClick: Le,
      contentEl: U,
      globalTop: v,
      localTop: g,
      updateLocation: ce
    };
  }
}), rr = Symbol("Forwarded refs");
function sr(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function as(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[rr] = n, new Proxy(e, {
    get(r, s) {
      if (Reflect.has(r, s))
        return Reflect.get(r, s);
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const i of n)
          if (i.value && Reflect.has(i.value, s)) {
            const l = Reflect.get(i.value, s);
            return typeof l == "function" ? l.bind(i.value) : l;
          }
      }
    },
    has(r, s) {
      if (Reflect.has(r, s))
        return !0;
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const i of n)
        if (i.value && Reflect.has(i.value, s))
          return !0;
      return !1;
    },
    set(r, s, i) {
      if (Reflect.has(r, s))
        return Reflect.set(r, s, i);
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const l of n)
        if (l.value && Reflect.has(l.value, s))
          return Reflect.set(l.value, s, i);
      return !1;
    },
    getOwnPropertyDescriptor(r, s) {
      const i = Reflect.getOwnPropertyDescriptor(r, s);
      if (i) return i;
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const l of n) {
          if (!l.value) continue;
          const u = sr(l.value, s) ?? ("_" in l.value ? sr(l.value._?.setupState, s) : void 0);
          if (u) return u;
        }
        for (const l of n) {
          const u = l.value && l.value[rr];
          if (!u) continue;
          const c = u.slice();
          for (; c.length; ) {
            const d = c.shift(), y = sr(d.value, s);
            if (y) return y;
            const m = d.value && d.value[rr];
            m && c.push(...m);
          }
        }
      }
    }
  });
}
const mf = A({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...bt(ns({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Dl
    }
  }), ["absolute"])
}, "VMenu"), hf = B()({
  name: "VMenu",
  props: mf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), {
      scopeId: r
    } = ts(), s = ct(), i = f(() => e.id || `v-menu-${s}`), l = H(), u = Me(pr, null), c = se(0);
    Ke(pr, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(h) {
        setTimeout(() => {
          !c.value && !e.persistent && (h == null || h && !Uu(h, l.value.contentEl)) && (a.value = !1, u?.closeParents());
        }, 40);
      }
    });
    async function d(h) {
      const S = h.relatedTarget, _ = h.target;
      await Be(), a.value && S !== _ && l.value?.contentEl && // We're the topmost menu
      l.value?.globalTop && // It isn't the document or the menu body
      ![document, l.value.contentEl].includes(_) && // It isn't inside the menu body
      !l.value.contentEl.contains(_) && ua(l.value.contentEl)[0]?.focus();
    }
    J(a, (h) => {
      h ? (u?.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (u?.unregister(), document.removeEventListener("focusin", d));
    });
    function y(h) {
      u?.closeParents(h);
    }
    function m(h) {
      if (!e.disabled)
        if (h.key === "Tab" || h.key === "Enter" && !e.closeOnContentClick) {
          if (h.key === "Enter" && (h.target instanceof HTMLTextAreaElement || h.target instanceof HTMLInputElement && h.target.closest("form"))) return;
          h.key === "Enter" && h.preventDefault(), Zi(ua(l.value?.contentEl, !1), h.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (a.value = !1, l.value?.activatorEl?.focus());
        } else ["Enter", " "].includes(h.key) && e.closeOnContentClick && (a.value = !1, u?.closeParents());
    }
    function v(h) {
      if (e.disabled) return;
      const S = l.value?.contentEl;
      S && a.value ? h.key === "ArrowDown" ? (h.preventDefault(), ca(S, "next")) : h.key === "ArrowUp" && (h.preventDefault(), ca(S, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (a.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => v(h))));
    }
    const g = f(() => K({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": i.value,
      onKeydown: v
    }, e.activatorProps));
    return z(() => {
      const h = An.filterProps(e);
      return o(An, K({
        ref: l,
        id: i.value,
        class: ["v-menu", e.class],
        style: e.style
      }, h, {
        modelValue: a.value,
        "onUpdate:modelValue": (S) => a.value = S,
        absolute: !0,
        activatorProps: g.value,
        "onClick:outside": y,
        onKeydown: m
      }, r), {
        activator: n.activator,
        default: function() {
          for (var S = arguments.length, _ = new Array(S), x = 0; x < S; x++)
            _[x] = arguments[x];
          return o(Pe, {
            root: "VMenu"
          }, {
            default: () => [n.default?.(..._)]
          });
        }
      });
    }), as({
      id: i,
      ΨopenChildren: c
    }, l);
  }
}), Xl = A({
  color: String,
  ...on(),
  ...ee(),
  ...Rt(),
  ...cn(),
  ...Aa(),
  ...Gr(),
  ...dt(),
  ...Ce(),
  ...Ee()
}, "VSheet"), br = B()({
  name: "VSheet",
  props: Xl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Re(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = et(W(e, "color")), {
      borderClasses: i
    } = un(e), {
      dimensionStyles: l
    } = Yt(e), {
      elevationClasses: u
    } = dn(e), {
      locationStyles: c
    } = Va(e), {
      positionClasses: d
    } = Kr(e), {
      roundedClasses: y
    } = ft(e);
    return z(() => o(e.tag, {
      class: ["v-sheet", a.value, r.value, i.value, u.value, d.value, y.value, e.class],
      style: [s.value, l.value, c.value, e.style]
    }, n)), {};
  }
}), gf = {
  key: 2,
  class: "text--lighten-2 mt-n2 caption"
}, yf = { key: 0 }, _f = { key: 1 }, Sf = {
  __name: "DateSelector",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  setup(e) {
    const n = e.piniaStore, a = f(() => n.show_compare_date_range), r = f(() => n.getConfig), s = f(() => n.isPresetsIconShown), i = f(() => n.isCalendarIconShown), l = f(() => n.getFormattedDate), u = f(() => n.getPrimaryPresets), c = f(() => n.getPresetLabel), d = f(() => n.getPresetLabelSmall), y = (m) => {
      n.dialog_opened = m;
    };
    return (m, v) => (Z(), he(br, {
      class: "pa-2 date-selector elevation-2 rounded",
      onClick: v[0] || (v[0] = (g) => y(!0))
    }, {
      default: T(() => [
        o(de, { "no-gutters": "" }, {
          default: T(() => [
            i.value ? (Z(), he(ue, {
              key: 0,
              cols: "1",
              class: "mr-2"
            }, {
              default: T(() => [
                o(le, {
                  variant: "text",
                  rounded: "",
                  icon: r.value.compare ? "mdi-calendar-month" : "mdi-free-cancellation"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })) : De("", !0),
            o(ue, { class: "ml-3" }, {
              default: T(() => [
                r.value.primaryPreset ? (Z(), je("div", {
                  key: 0,
                  class: sa(["title", { "mt-1": !r.value.compare || !a.value }])
                }, _n(c.value(r.value.primaryPreset)), 3)) : (Z(), je("div", {
                  key: 1,
                  class: sa(["subtitle-1", { "mt-2": !r.value.compare || !a.value }])
                }, _n(l.value(r.value.dateStart, r.value.dateUntil)), 3)),
                a.value && r.value.compare ? (Z(), je("div", gf, [
                  r.value.comparePreset ? (Z(), je("div", yf, "vs " + _n(d.value(r.value.comparePreset)), 1)) : (Z(), je("div", _f, "vs " + _n(l.value(r.value.compareStart, r.value.compareUntil)), 1))
                ])) : De("", !0)
              ]),
              _: 1
            }),
            s.value ? (Z(), he(ue, {
              key: 1,
              cols: "1",
              class: "mr-4"
            }, {
              default: T(() => [
                o(hf, {
                  "offset-y": "",
                  left: ""
                }, {
                  activator: T(({ props: g }) => [
                    o(le, K({
                      rounded: "",
                      variant: "text"
                    }, g, { icon: "mdi-chevron-down" }), null, 16)
                  ]),
                  default: T(() => [
                    o($d, null, {
                      default: T(() => [
                        (Z(!0), je(Ae, null, du(u.value, (g, h) => (Z(), he(yr, { key: h }, {
                          default: T(() => [
                            o(Nl, null, {
                              default: T(() => [
                                be(_n(c.value(g)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : De("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}, pf = /* @__PURE__ */ $n(Sf, [["__scopeId", "data-v-28b2338d"]]);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Jl;
function p() {
  return Jl.apply(null, arguments);
}
function bf(e) {
  Jl = e;
}
function nt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Wt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ae(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function rs(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (ae(e, t))
      return !1;
  return !0;
}
function Ve(e) {
  return e === void 0;
}
function wt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Hn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ql(e, t) {
  var n = [], a, r = e.length;
  for (a = 0; a < r; ++a)
    n.push(t(e[a], a));
  return n;
}
function Ot(e, t) {
  for (var n in t)
    ae(t, n) && (e[n] = t[n]);
  return ae(t, "toString") && (e.toString = t.toString), ae(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function vt(e, t, n, a) {
  return wo(e, t, n, a, !0).utc();
}
function kf() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function G(e) {
  return e._pf == null && (e._pf = kf()), e._pf;
}
var kr;
Array.prototype.some ? kr = Array.prototype.some : kr = function(e) {
  var t = Object(this), n = t.length >>> 0, a;
  for (a = 0; a < n; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function ss(e) {
  var t = null, n = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = G(e), n = kr.call(t.parsedDateParts, function(r) {
    return r != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function Na(e) {
  var t = vt(NaN);
  return e != null ? Ot(G(t), e) : G(t).userInvalidated = !0, t;
}
var yi = p.momentProperties = [], ir = !1;
function is(e, t) {
  var n, a, r, s = yi.length;
  if (Ve(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ve(t._i) || (e._i = t._i), Ve(t._f) || (e._f = t._f), Ve(t._l) || (e._l = t._l), Ve(t._strict) || (e._strict = t._strict), Ve(t._tzm) || (e._tzm = t._tzm), Ve(t._isUTC) || (e._isUTC = t._isUTC), Ve(t._offset) || (e._offset = t._offset), Ve(t._pf) || (e._pf = G(t)), Ve(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      a = yi[n], r = t[a], Ve(r) || (e[a] = r);
  return e;
}
function jn(e) {
  is(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ir === !1 && (ir = !0, p.updateOffset(this), ir = !1);
}
function at(e) {
  return e instanceof jn || e != null && e._isAMomentObject != null;
}
function eo(e) {
  p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Ze(e, t) {
  var n = !0;
  return Ot(function() {
    if (p.deprecationHandler != null && p.deprecationHandler(null, e), n) {
      var a = [], r, s, i, l = arguments.length;
      for (s = 0; s < l; s++) {
        if (r = "", typeof arguments[s] == "object") {
          r += `
[` + s + "] ";
          for (i in arguments[0])
            ae(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[s];
        a.push(r);
      }
      eo(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var _i = {};
function to(e, t) {
  p.deprecationHandler != null && p.deprecationHandler(e, t), _i[e] || (eo(t), _i[e] = !0);
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;
function mt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function wf(e) {
  var t, n;
  for (n in e)
    ae(e, n) && (t = e[n], mt(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function wr(e, t) {
  var n = Ot({}, e), a;
  for (a in t)
    ae(t, a) && (Wt(e[a]) && Wt(t[a]) ? (n[a] = {}, Ot(n[a], e[a]), Ot(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]);
  for (a in e)
    ae(e, a) && !ae(t, a) && Wt(e[a]) && (n[a] = Ot({}, n[a]));
  return n;
}
function ls(e) {
  e != null && this.set(e);
}
var Cr;
Object.keys ? Cr = Object.keys : Cr = function(e) {
  var t, n = [];
  for (t in e)
    ae(e, t) && n.push(t);
  return n;
};
var Cf = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Pf(e, t, n) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return mt(a) ? a.call(t, n) : a;
}
function ot(e, t, n) {
  var a = "" + Math.abs(e), r = t - a.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var os = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Xn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, lr = {}, Qt = {};
function N(e, t, n, a) {
  var r = a;
  typeof a == "string" && (r = function() {
    return this[a]();
  }), e && (Qt[e] = r), t && (Qt[t[0]] = function() {
    return ot(r.apply(this, arguments), t[1], t[2]);
  }), n && (Qt[n] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function xf(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Mf(e) {
  var t = e.match(os), n, a;
  for (n = 0, a = t.length; n < a; n++)
    Qt[t[n]] ? t[n] = Qt[t[n]] : t[n] = xf(t[n]);
  return function(r) {
    var s = "", i;
    for (i = 0; i < a; i++)
      s += mt(t[i]) ? t[i].call(r, e) : t[i];
    return s;
  };
}
function na(e, t) {
  return e.isValid() ? (t = no(t, e.localeData()), lr[t] = lr[t] || Mf(t), lr[t](e)) : e.localeData().invalidDate();
}
function no(e, t) {
  var n = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (Xn.lastIndex = 0; n >= 0 && Xn.test(e); )
    e = e.replace(
      Xn,
      a
    ), Xn.lastIndex = 0, n -= 1;
  return e;
}
var Tf = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Df(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(os).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Of = "Invalid date";
function Ef() {
  return this._invalidDate;
}
var Af = "%d", Vf = /\d{1,2}/;
function If(e) {
  return this._ordinal.replace("%d", e);
}
var Rf = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Yf(e, t, n, a) {
  var r = this._relativeTime[n];
  return mt(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
}
function Lf(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return mt(n) ? n(t) : n.replace(/%s/i, t);
}
var Si = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Xe(e) {
  return typeof e == "string" ? Si[e] || Si[e.toLowerCase()] : void 0;
}
function us(e) {
  var t = {}, n, a;
  for (a in e)
    ae(e, a) && (n = Xe(a), n && (t[n] = e[a]));
  return t;
}
var Nf = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Ff(e) {
  var t = [], n;
  for (n in e)
    ae(e, n) && t.push({ unit: n, priority: Nf[n] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
var ao = /\d/, He = /\d\d/, ro = /\d{3}/, cs = /\d{4}/, Fa = /[+-]?\d{6}/, ve = /\d\d?/, so = /\d\d\d\d?/, io = /\d\d\d\d\d\d?/, $a = /\d{1,3}/, ds = /\d{1,4}/, Ba = /[+-]?\d{1,6}/, mn = /\d+/, Wa = /[+-]?\d+/, $f = /Z|[+-]\d\d:?\d\d/gi, Ua = /Z|[+-]\d\d(?::?\d\d)?/gi, Bf = /[+-]?\d+(\.\d{1,3})?/, zn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, hn = /^[1-9]\d?/, fs = /^([1-9]\d|\d)/, _a;
_a = {};
function I(e, t, n) {
  _a[e] = mt(t) ? t : function(a, r) {
    return a && n ? n : t;
  };
}
function Wf(e, t) {
  return ae(_a, e) ? _a[e](t._strict, t._locale) : new RegExp(Uf(e));
}
function Uf(e) {
  return St(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, a, r, s) {
        return n || a || r || s;
      }
    )
  );
}
function St(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function ze(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function X(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = ze(t)), n;
}
var Pr = {};
function ie(e, t) {
  var n, a = t, r;
  for (typeof e == "string" && (e = [e]), wt(t) && (a = function(s, i) {
    i[t] = X(s);
  }), r = e.length, n = 0; n < r; n++)
    Pr[e[n]] = a;
}
function Gn(e, t) {
  ie(e, function(n, a, r, s) {
    r._w = r._w || {}, t(n, r._w, r, s);
  });
}
function Hf(e, t, n) {
  t != null && ae(Pr, e) && Pr[e](t, n._a, n, e);
}
function Ha(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Oe = 0, yt = 1, st = 2, ke = 3, Qe = 4, _t = 5, Ft = 6, jf = 7, zf = 8;
N("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ot(e, 4) : "+" + e;
});
N(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
N(0, ["YYYY", 4], 0, "year");
N(0, ["YYYYY", 5], 0, "year");
N(0, ["YYYYYY", 6, !0], 0, "year");
I("Y", Wa);
I("YY", ve, He);
I("YYYY", ds, cs);
I("YYYYY", Ba, Fa);
I("YYYYYY", Ba, Fa);
ie(["YYYYY", "YYYYYY"], Oe);
ie("YYYY", function(e, t) {
  t[Oe] = e.length === 2 ? p.parseTwoDigitYear(e) : X(e);
});
ie("YY", function(e, t) {
  t[Oe] = p.parseTwoDigitYear(e);
});
ie("Y", function(e, t) {
  t[Oe] = parseInt(e, 10);
});
function Mn(e) {
  return Ha(e) ? 366 : 365;
}
p.parseTwoDigitYear = function(e) {
  return X(e) + (X(e) > 68 ? 1900 : 2e3);
};
var lo = gn("FullYear", !0);
function Gf() {
  return Ha(this.year());
}
function gn(e, t) {
  return function(n) {
    return n != null ? (oo(this, e, n), p.updateOffset(this, t), this) : Vn(this, e);
  };
}
function Vn(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, a = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return a ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return a ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return a ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return a ? n.getUTCHours() : n.getHours();
    case "Date":
      return a ? n.getUTCDate() : n.getDate();
    case "Day":
      return a ? n.getUTCDay() : n.getDay();
    case "Month":
      return a ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return a ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function oo(e, t, n) {
  var a, r, s, i, l;
  if (!(!e.isValid() || isNaN(n))) {
    switch (a = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? a.setUTCMilliseconds(n) : a.setMilliseconds(n));
      case "Seconds":
        return void (r ? a.setUTCSeconds(n) : a.setSeconds(n));
      case "Minutes":
        return void (r ? a.setUTCMinutes(n) : a.setMinutes(n));
      case "Hours":
        return void (r ? a.setUTCHours(n) : a.setHours(n));
      case "Date":
        return void (r ? a.setUTCDate(n) : a.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    s = n, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !Ha(s) ? 28 : l, r ? a.setUTCFullYear(s, i, l) : a.setFullYear(s, i, l);
  }
}
function Kf(e) {
  return e = Xe(e), mt(this[e]) ? this[e]() : this;
}
function qf(e, t) {
  if (typeof e == "object") {
    e = us(e);
    var n = Ff(e), a, r = n.length;
    for (a = 0; a < r; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = Xe(e), mt(this[e]))
    return this[e](t);
  return this;
}
function Zf(e, t) {
  return (e % t + t) % t;
}
var Se;
Array.prototype.indexOf ? Se = Array.prototype.indexOf : Se = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function vs(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = Zf(t, 12);
  return e += (t - n) / 12, n === 1 ? Ha(e) ? 29 : 28 : 31 - n % 7 % 2;
}
N("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
N("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
N("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
I("M", ve, hn);
I("MM", ve, He);
I("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
I("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
ie(["M", "MM"], function(e, t) {
  t[yt] = X(e) - 1;
});
ie(["MMM", "MMMM"], function(e, t, n, a) {
  var r = n._locale.monthsParse(e, a, n._strict);
  r != null ? t[yt] = r : G(n).invalidMonth = e;
});
var Xf = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), uo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), co = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Jf = zn, Qf = zn;
function ev(e, t) {
  return e ? nt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || co).test(t) ? "format" : "standalone"][e.month()] : nt(this._months) ? this._months : this._months.standalone;
}
function tv(e, t) {
  return e ? nt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[co.test(t) ? "format" : "standalone"][e.month()] : nt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function nv(e, t, n) {
  var a, r, s, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      s = vt([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (r = Se.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = Se.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = Se.call(this._shortMonthsParse, i), r !== -1 ? r : (r = Se.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = Se.call(this._longMonthsParse, i), r !== -1 ? r : (r = Se.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function av(e, t, n) {
  var a, r, s;
  if (this._monthsParseExact)
    return nv.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (r = vt([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[a] && (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (n && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!n && this._monthsParse[a].test(e))
      return a;
  }
}
function fo(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = X(t);
    else if (t = e.localeData().monthsParse(t), !wt(t))
      return e;
  }
  var n = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, vs(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a), e;
}
function vo(e) {
  return e != null ? (fo(this, e), p.updateOffset(this, !0), this) : Vn(this, "Month");
}
function rv() {
  return vs(this.year(), this.month());
}
function sv(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || mo.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ae(this, "_monthsShortRegex") || (this._monthsShortRegex = Jf), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function iv(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || mo.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ae(this, "_monthsRegex") || (this._monthsRegex = Qf), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function mo() {
  function e(u, c) {
    return c.length - u.length;
  }
  var t = [], n = [], a = [], r, s, i, l;
  for (r = 0; r < 12; r++)
    s = vt([2e3, r]), i = St(this.monthsShort(s, "")), l = St(this.months(s, "")), t.push(i), n.push(l), a.push(l), a.push(i);
  t.sort(e), n.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function lv(e, t, n, a, r, s, i) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, a, r, s, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, a, r, s, i), l;
}
function In(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Sa(e, t, n) {
  var a = 7 + t - n, r = (7 + In(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function ho(e, t, n, a, r) {
  var s = (7 + n - a) % 7, i = Sa(e, a, r), l = 1 + 7 * (t - 1) + s + i, u, c;
  return l <= 0 ? (u = e - 1, c = Mn(u) + l) : l > Mn(e) ? (u = e + 1, c = l - Mn(e)) : (u = e, c = l), {
    year: u,
    dayOfYear: c
  };
}
function Rn(e, t, n) {
  var a = Sa(e.year(), t, n), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, s, i;
  return r < 1 ? (i = e.year() - 1, s = r + pt(i, t, n)) : r > pt(e.year(), t, n) ? (s = r - pt(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), {
    week: s,
    year: i
  };
}
function pt(e, t, n) {
  var a = Sa(e, t, n), r = Sa(e + 1, t, n);
  return (Mn(e) - a + r) / 7;
}
N("w", ["ww", 2], "wo", "week");
N("W", ["WW", 2], "Wo", "isoWeek");
I("w", ve, hn);
I("ww", ve, He);
I("W", ve, hn);
I("WW", ve, He);
Gn(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = X(e);
  }
);
function ov(e) {
  return Rn(e, this._week.dow, this._week.doy).week;
}
var uv = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function cv() {
  return this._week.dow;
}
function dv() {
  return this._week.doy;
}
function fv(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function vv(e) {
  var t = Rn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
N("d", 0, "do", "day");
N("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
N("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
N("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
N("e", 0, 0, "weekday");
N("E", 0, 0, "isoWeekday");
I("d", ve);
I("e", ve);
I("E", ve);
I("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
I("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
I("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Gn(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var r = n._locale.weekdaysParse(e, a, n._strict);
  r != null ? t.d = r : G(n).invalidWeekday = e;
});
Gn(["d", "e", "E"], function(e, t, n, a) {
  t[a] = X(e);
});
function mv(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function hv(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ms(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var gv = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), go = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), yv = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), _v = zn, Sv = zn, pv = zn;
function bv(e, t) {
  var n = nt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ms(n, this._week.dow) : e ? n[e.day()] : n;
}
function kv(e) {
  return e === !0 ? ms(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function wv(e) {
  return e === !0 ? ms(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Cv(e, t, n) {
  var a, r, s, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      s = vt([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (r = Se.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = Se.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = Se.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = Se.call(this._weekdaysParse, i), r !== -1 || (r = Se.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = Se.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = Se.call(this._shortWeekdaysParse, i), r !== -1 || (r = Se.call(this._weekdaysParse, i), r !== -1) ? r : (r = Se.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = Se.call(this._minWeekdaysParse, i), r !== -1 || (r = Se.call(this._weekdaysParse, i), r !== -1) ? r : (r = Se.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function Pv(e, t, n) {
  var a, r, s;
  if (this._weekdaysParseExact)
    return Cv.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (r = vt([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (n && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!n && this._weekdaysParse[a].test(e))
      return a;
  }
}
function xv(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Vn(this, "Day");
  return e != null ? (e = mv(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Mv(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Tv(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = hv(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Dv(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ae(this, "_weekdaysRegex") || (this._weekdaysRegex = _v), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ov(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ae(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sv), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ev(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || hs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ae(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = pv), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function hs() {
  function e(d, y) {
    return y.length - d.length;
  }
  var t = [], n = [], a = [], r = [], s, i, l, u, c;
  for (s = 0; s < 7; s++)
    i = vt([2e3, 1]).day(s), l = St(this.weekdaysMin(i, "")), u = St(this.weekdaysShort(i, "")), c = St(this.weekdays(i, "")), t.push(l), n.push(u), a.push(c), r.push(l), r.push(u), r.push(c);
  t.sort(e), n.sort(e), a.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function gs() {
  return this.hours() % 12 || 12;
}
function Av() {
  return this.hours() || 24;
}
N("H", ["HH", 2], 0, "hour");
N("h", ["hh", 2], 0, gs);
N("k", ["kk", 2], 0, Av);
N("hmm", 0, 0, function() {
  return "" + gs.apply(this) + ot(this.minutes(), 2);
});
N("hmmss", 0, 0, function() {
  return "" + gs.apply(this) + ot(this.minutes(), 2) + ot(this.seconds(), 2);
});
N("Hmm", 0, 0, function() {
  return "" + this.hours() + ot(this.minutes(), 2);
});
N("Hmmss", 0, 0, function() {
  return "" + this.hours() + ot(this.minutes(), 2) + ot(this.seconds(), 2);
});
function yo(e, t) {
  N(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
yo("a", !0);
yo("A", !1);
function _o(e, t) {
  return t._meridiemParse;
}
I("a", _o);
I("A", _o);
I("H", ve, fs);
I("h", ve, hn);
I("k", ve, hn);
I("HH", ve, He);
I("hh", ve, He);
I("kk", ve, He);
I("hmm", so);
I("hmmss", io);
I("Hmm", so);
I("Hmmss", io);
ie(["H", "HH"], ke);
ie(["k", "kk"], function(e, t, n) {
  var a = X(e);
  t[ke] = a === 24 ? 0 : a;
});
ie(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
ie(["h", "hh"], function(e, t, n) {
  t[ke] = X(e), G(n).bigHour = !0;
});
ie("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[Qe] = X(e.substr(a)), G(n).bigHour = !0;
});
ie("hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[Qe] = X(e.substr(a, 2)), t[_t] = X(e.substr(r)), G(n).bigHour = !0;
});
ie("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[Qe] = X(e.substr(a));
});
ie("Hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[ke] = X(e.substr(0, a)), t[Qe] = X(e.substr(a, 2)), t[_t] = X(e.substr(r));
});
function Vv(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Iv = /[ap]\.?m?\.?/i, Rv = gn("Hours", !0);
function Yv(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var So = {
  calendar: Cf,
  longDateFormat: Tf,
  invalidDate: Of,
  ordinal: Af,
  dayOfMonthOrdinalParse: Vf,
  relativeTime: Rf,
  months: Xf,
  monthsShort: uo,
  week: uv,
  weekdays: gv,
  weekdaysMin: yv,
  weekdaysShort: go,
  meridiemParse: Iv
}, me = {}, bn = {}, Yn;
function Lv(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function pi(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Nv(e) {
  for (var t = 0, n, a, r, s; t < e.length; ) {
    for (s = pi(e[t]).split("-"), n = s.length, a = pi(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (r = ja(s.slice(0, n).join("-")), r)
        return r;
      if (a && a.length >= n && Lv(s, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Yn;
}
function Fv(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ja(e) {
  var t = null, n;
  if (me[e] === void 0 && typeof module < "u" && module && module.exports && Fv(e))
    try {
      t = Yn._abbr, n = require, n("./locale/" + e), At(t);
    } catch {
      me[e] = null;
    }
  return me[e];
}
function At(e, t) {
  var n;
  return e && (Ve(t) ? n = xt(e) : n = ys(e, t), n ? Yn = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Yn._abbr;
}
function ys(e, t) {
  if (t !== null) {
    var n, a = So;
    if (t.abbr = e, me[e] != null)
      to(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = me[e]._config;
    else if (t.parentLocale != null)
      if (me[t.parentLocale] != null)
        a = me[t.parentLocale]._config;
      else if (n = ja(t.parentLocale), n != null)
        a = n._config;
      else
        return bn[t.parentLocale] || (bn[t.parentLocale] = []), bn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return me[e] = new ls(wr(a, t)), bn[e] && bn[e].forEach(function(r) {
      ys(r.name, r.config);
    }), At(e), me[e];
  } else
    return delete me[e], null;
}
function $v(e, t) {
  if (t != null) {
    var n, a, r = So;
    me[e] != null && me[e].parentLocale != null ? me[e].set(wr(me[e]._config, t)) : (a = ja(e), a != null && (r = a._config), t = wr(r, t), a == null && (t.abbr = e), n = new ls(t), n.parentLocale = me[e], me[e] = n), At(e);
  } else
    me[e] != null && (me[e].parentLocale != null ? (me[e] = me[e].parentLocale, e === At() && At(e)) : me[e] != null && delete me[e]);
  return me[e];
}
function xt(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Yn;
  if (!nt(e)) {
    if (t = ja(e), t)
      return t;
    e = [e];
  }
  return Nv(e);
}
function Bv() {
  return Cr(me);
}
function _s(e) {
  var t, n = e._a;
  return n && G(e).overflow === -2 && (t = n[yt] < 0 || n[yt] > 11 ? yt : n[st] < 1 || n[st] > vs(n[Oe], n[yt]) ? st : n[ke] < 0 || n[ke] > 24 || n[ke] === 24 && (n[Qe] !== 0 || n[_t] !== 0 || n[Ft] !== 0) ? ke : n[Qe] < 0 || n[Qe] > 59 ? Qe : n[_t] < 0 || n[_t] > 59 ? _t : n[Ft] < 0 || n[Ft] > 999 ? Ft : -1, G(e)._overflowDayOfYear && (t < Oe || t > st) && (t = st), G(e)._overflowWeeks && t === -1 && (t = jf), G(e)._overflowWeekday && t === -1 && (t = zf), G(e).overflow = t), e;
}
var Wv = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Uv = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Hv = /Z|[+-]\d\d(?::?\d\d)?/, Jn = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], or = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], jv = /^\/?Date\((-?\d+)/i, zv = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Gv = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function po(e) {
  var t, n, a = e._i, r = Wv.exec(a) || Uv.exec(a), s, i, l, u, c = Jn.length, d = or.length;
  if (r) {
    for (G(e).iso = !0, t = 0, n = c; t < n; t++)
      if (Jn[t][1].exec(r[1])) {
        i = Jn[t][0], s = Jn[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, n = d; t < n; t++)
        if (or[t][1].exec(r[3])) {
          l = (r[2] || " ") + or[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && l != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Hv.exec(r[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (l || "") + (u || ""), ps(e);
  } else
    e._isValid = !1;
}
function Kv(e, t, n, a, r, s) {
  var i = [
    qv(e),
    uo.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return s && i.push(parseInt(s, 10)), i;
}
function qv(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Zv(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Xv(e, t, n) {
  if (e) {
    var a = go.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return G(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function Jv(e, t, n) {
  if (e)
    return Gv[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), r = a % 100, s = (a - r) / 100;
  return s * 60 + r;
}
function bo(e) {
  var t = zv.exec(Zv(e._i)), n;
  if (t) {
    if (n = Kv(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Xv(t[1], n, e))
      return;
    e._a = n, e._tzm = Jv(t[8], t[9], t[10]), e._d = In.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), G(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Qv(e) {
  var t = jv.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (po(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (bo(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : p.createFromInputFallback(e);
}
p.createFromInputFallback = Ze(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Gt(e, t, n) {
  return e ?? t ?? n;
}
function em(e) {
  var t = new Date(p.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ss(e) {
  var t, n, a = [], r, s, i;
  if (!e._d) {
    for (r = em(e), e._w && e._a[st] == null && e._a[yt] == null && tm(e), e._dayOfYear != null && (i = Gt(e._a[Oe], r[Oe]), (e._dayOfYear > Mn(i) || e._dayOfYear === 0) && (G(e)._overflowDayOfYear = !0), n = In(i, 0, e._dayOfYear), e._a[yt] = n.getUTCMonth(), e._a[st] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[ke] === 24 && e._a[Qe] === 0 && e._a[_t] === 0 && e._a[Ft] === 0 && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? In : lv).apply(
      null,
      a
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (G(e).weekdayMismatch = !0);
  }
}
function tm(e) {
  var t, n, a, r, s, i, l, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, i = 4, n = Gt(
    t.GG,
    e._a[Oe],
    Rn(fe(), 1, 4).year
  ), a = Gt(t.W, 1), r = Gt(t.E, 1), (r < 1 || r > 7) && (u = !0)) : (s = e._locale._week.dow, i = e._locale._week.doy, c = Rn(fe(), s, i), n = Gt(t.gg, e._a[Oe], c.year), a = Gt(t.w, c.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (u = !0)) : t.e != null ? (r = t.e + s, (t.e < 0 || t.e > 6) && (u = !0)) : r = s), a < 1 || a > pt(n, s, i) ? G(e)._overflowWeeks = !0 : u != null ? G(e)._overflowWeekday = !0 : (l = ho(n, a, r, s, i), e._a[Oe] = l.year, e._dayOfYear = l.dayOfYear);
}
p.ISO_8601 = function() {
};
p.RFC_2822 = function() {
};
function ps(e) {
  if (e._f === p.ISO_8601) {
    po(e);
    return;
  }
  if (e._f === p.RFC_2822) {
    bo(e);
    return;
  }
  e._a = [], G(e).empty = !0;
  var t = "" + e._i, n, a, r, s, i, l = t.length, u = 0, c, d;
  for (r = no(e._f, e._locale).match(os) || [], d = r.length, n = 0; n < d; n++)
    s = r[n], a = (t.match(Wf(s, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && G(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), u += a.length), Qt[s] ? (a ? G(e).empty = !1 : G(e).unusedTokens.push(s), Hf(s, a, e)) : e._strict && !a && G(e).unusedTokens.push(s);
  G(e).charsLeftOver = l - u, t.length > 0 && G(e).unusedInput.push(t), e._a[ke] <= 12 && G(e).bigHour === !0 && e._a[ke] > 0 && (G(e).bigHour = void 0), G(e).parsedDateParts = e._a.slice(0), G(e).meridiem = e._meridiem, e._a[ke] = nm(
    e._locale,
    e._a[ke],
    e._meridiem
  ), c = G(e).era, c !== null && (e._a[Oe] = e._locale.erasConvertYear(c, e._a[Oe])), Ss(e), _s(e);
}
function nm(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function am(e) {
  var t, n, a, r, s, i, l = !1, u = e._f.length;
  if (u === 0) {
    G(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < u; r++)
    s = 0, i = !1, t = is({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], ps(t), ss(t) && (i = !0), s += G(t).charsLeftOver, s += G(t).unusedTokens.length * 10, G(t).score = s, l ? s < a && (a = s, n = t) : (a == null || s < a || i) && (a = s, n = t, i && (l = !0));
  Ot(e, n || t);
}
function rm(e) {
  if (!e._d) {
    var t = us(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Ql(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), Ss(e);
  }
}
function sm(e) {
  var t = new jn(_s(ko(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ko(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || xt(e._l), t === null || n === void 0 && t === "" ? Na({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), at(t) ? new jn(_s(t)) : (Hn(t) ? e._d = t : nt(n) ? am(e) : n ? ps(e) : im(e), ss(e) || (e._d = null), e));
}
function im(e) {
  var t = e._i;
  Ve(t) ? e._d = new Date(p.now()) : Hn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Qv(e) : nt(t) ? (e._a = Ql(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Ss(e)) : Wt(t) ? rm(e) : wt(t) ? e._d = new Date(t) : p.createFromInputFallback(e);
}
function wo(e, t, n, a, r) {
  var s = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (Wt(e) && rs(e) || nt(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = e, s._f = t, s._strict = a, sm(s);
}
function fe(e, t, n, a) {
  return wo(e, t, n, a, !1);
}
var lm = Ze(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = fe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Na();
  }
), om = Ze(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = fe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Na();
  }
);
function Co(e, t) {
  var n, a;
  if (t.length === 1 && nt(t[0]) && (t = t[0]), !t.length)
    return fe();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function um() {
  var e = [].slice.call(arguments, 0);
  return Co("isBefore", e);
}
function cm() {
  var e = [].slice.call(arguments, 0);
  return Co("isAfter", e);
}
var dm = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, kn = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function fm(e) {
  var t, n = !1, a, r = kn.length;
  for (t in e)
    if (ae(e, t) && !(Se.call(kn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[kn[a]]) {
      if (n)
        return !1;
      parseFloat(e[kn[a]]) !== X(e[kn[a]]) && (n = !0);
    }
  return !0;
}
function vm() {
  return this._isValid;
}
function mm() {
  return rt(NaN);
}
function za(e) {
  var t = us(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, s = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, u = t.minute || 0, c = t.second || 0, d = t.millisecond || 0;
  this._isValid = fm(t), this._milliseconds = +d + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +i + s * 7, this._months = +r + a * 3 + n * 12, this._data = {}, this._locale = xt(), this._bubble();
}
function aa(e) {
  return e instanceof za;
}
function xr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function hm(e, t, n) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), s = 0, i;
  for (i = 0; i < a; i++)
    X(e[i]) !== X(t[i]) && s++;
  return s + r;
}
function Po(e, t) {
  N(e, 0, 0, function() {
    var n = this.utcOffset(), a = "+";
    return n < 0 && (n = -n, a = "-"), a + ot(~~(n / 60), 2) + t + ot(~~n % 60, 2);
  });
}
Po("Z", ":");
Po("ZZ", "");
I("Z", Ua);
I("ZZ", Ua);
ie(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = bs(Ua, e);
});
var gm = /([\+\-]|\d\d)/gi;
function bs(e, t) {
  var n = (t || "").match(e), a, r, s;
  return n === null ? null : (a = n[n.length - 1] || [], r = (a + "").match(gm) || ["-", 0, 0], s = +(r[1] * 60) + X(r[2]), s === 0 ? 0 : r[0] === "+" ? s : -s);
}
function ks(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (at(e) || Hn(e) ? e.valueOf() : fe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), p.updateOffset(n, !1), n) : fe(e).local();
}
function Mr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
p.updateOffset = function() {
};
function ym(e, t, n) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = bs(Ua, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (r = Mr(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? To(
      this,
      rt(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : Mr(this);
}
function _m(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Sm(e) {
  return this.utcOffset(0, e);
}
function pm(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Mr(this), "m")), this;
}
function bm() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = bs($f, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function km(e) {
  return this.isValid() ? (e = e ? fe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function wm() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Cm() {
  if (!Ve(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return is(e, this), e = ko(e), e._a ? (t = e._isUTC ? vt(e._a) : fe(e._a), this._isDSTShifted = this.isValid() && hm(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Pm() {
  return this.isValid() ? !this._isUTC : !1;
}
function xm() {
  return this.isValid() ? this._isUTC : !1;
}
function xo() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Mm = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Tm = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function rt(e, t) {
  var n = e, a = null, r, s, i;
  return aa(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : wt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Mm.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: X(a[st]) * r,
    h: X(a[ke]) * r,
    m: X(a[Qe]) * r,
    s: X(a[_t]) * r,
    ms: X(xr(a[Ft] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = Tm.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: Nt(a[2], r),
    M: Nt(a[3], r),
    w: Nt(a[4], r),
    d: Nt(a[5], r),
    h: Nt(a[6], r),
    m: Nt(a[7], r),
    s: Nt(a[8], r)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = Dm(
    fe(n.from),
    fe(n.to)
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), s = new za(n), aa(e) && ae(e, "_locale") && (s._locale = e._locale), aa(e) && ae(e, "_isValid") && (s._isValid = e._isValid), s;
}
rt.fn = za.prototype;
rt.invalid = mm;
function Nt(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function bi(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Dm(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = ks(t, e), e.isBefore(t) ? n = bi(e, t) : (n = bi(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Mo(e, t) {
  return function(n, a) {
    var r, s;
    return a !== null && !isNaN(+a) && (to(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = a, a = s), r = rt(n, a), To(this, r, e), this;
  };
}
function To(e, t, n, a) {
  var r = t._milliseconds, s = xr(t._days), i = xr(t._months);
  e.isValid() && (a = a ?? !0, i && fo(e, Vn(e, "Month") + i * n), s && oo(e, "Date", Vn(e, "Date") + s * n), r && e._d.setTime(e._d.valueOf() + r * n), a && p.updateOffset(e, s || i));
}
var Om = Mo(1, "add"), Em = Mo(-1, "subtract");
function Do(e) {
  return typeof e == "string" || e instanceof String;
}
function Am(e) {
  return at(e) || Hn(e) || Do(e) || wt(e) || Im(e) || Vm(e) || e === null || e === void 0;
}
function Vm(e) {
  var t = Wt(e) && !rs(e), n = !1, a = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, s, i = a.length;
  for (r = 0; r < i; r += 1)
    s = a[r], n = n || ae(e, s);
  return t && n;
}
function Im(e) {
  var t = nt(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !wt(a) && Do(e);
  }).length === 0), t && n;
}
function Rm(e) {
  var t = Wt(e) && !rs(e), n = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, s;
  for (r = 0; r < a.length; r += 1)
    s = a[r], n = n || ae(e, s);
  return t && n;
}
function Ym(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Lm(e, t) {
  arguments.length === 1 && (arguments[0] ? Am(arguments[0]) ? (e = arguments[0], t = void 0) : Rm(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || fe(), a = ks(n, this).startOf("day"), r = p.calendarFormat(this, a) || "sameElse", s = t && (mt(t[r]) ? t[r].call(this, n) : t[r]);
  return this.format(
    s || this.localeData().calendar(r, this, fe(n))
  );
}
function Nm() {
  return new jn(this);
}
function Fm(e, t) {
  var n = at(e) ? e : fe(e);
  return this.isValid() && n.isValid() ? (t = Xe(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function $m(e, t) {
  var n = at(e) ? e : fe(e);
  return this.isValid() && n.isValid() ? (t = Xe(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Bm(e, t, n, a) {
  var r = at(e) ? e : fe(e), s = at(t) ? t : fe(t);
  return this.isValid() && r.isValid() && s.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (a[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function Wm(e, t) {
  var n = at(e) ? e : fe(e), a;
  return this.isValid() && n.isValid() ? (t = Xe(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function Um(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Hm(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function jm(e, t, n) {
  var a, r, s;
  if (!this.isValid())
    return NaN;
  if (a = ks(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = Xe(t), t) {
    case "year":
      s = ra(this, a) / 12;
      break;
    case "month":
      s = ra(this, a);
      break;
    case "quarter":
      s = ra(this, a) / 3;
      break;
    case "second":
      s = (this - a) / 1e3;
      break;
    case "minute":
      s = (this - a) / 6e4;
      break;
    case "hour":
      s = (this - a) / 36e5;
      break;
    case "day":
      s = (this - a - r) / 864e5;
      break;
    case "week":
      s = (this - a - r) / 6048e5;
      break;
    default:
      s = this - a;
  }
  return n ? s : ze(s);
}
function ra(e, t) {
  if (e.date() < t.date())
    return -ra(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), r, s;
  return t - a < 0 ? (r = e.clone().add(n - 1, "months"), s = (t - a) / (a - r)) : (r = e.clone().add(n + 1, "months"), s = (t - a) / (r - a)), -(n + s) || 0;
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function zm() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Gm(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? na(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : mt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", na(n, "Z")) : na(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Km() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, r, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + a + r + s);
}
function qm(e) {
  e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
  var t = na(this, e);
  return this.localeData().postformat(t);
}
function Zm(e, t) {
  return this.isValid() && (at(e) && e.isValid() || fe(e).isValid()) ? rt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Xm(e) {
  return this.from(fe(), e);
}
function Jm(e, t) {
  return this.isValid() && (at(e) && e.isValid() || fe(e).isValid()) ? rt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Qm(e) {
  return this.to(fe(), e);
}
function Oo(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = xt(e), t != null && (this._locale = t), this);
}
var Eo = Ze(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ao() {
  return this._locale;
}
var pa = 1e3, en = 60 * pa, ba = 60 * en, Vo = (365 * 400 + 97) * 24 * ba;
function tn(e, t) {
  return (e % t + t) % t;
}
function Io(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Vo : new Date(e, t, n).valueOf();
}
function Ro(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Vo : Date.UTC(e, t, n);
}
function eh(e) {
  var t, n;
  if (e = Xe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ro : Io, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= tn(
        t + (this._isUTC ? 0 : this.utcOffset() * en),
        ba
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= tn(t, en);
      break;
    case "second":
      t = this._d.valueOf(), t -= tn(t, pa);
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function th(e) {
  var t, n;
  if (e = Xe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ro : Io, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ba - tn(
        t + (this._isUTC ? 0 : this.utcOffset() * en),
        ba
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += en - tn(t, en) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += pa - tn(t, pa) - 1;
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function nh() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ah() {
  return Math.floor(this.valueOf() / 1e3);
}
function rh() {
  return new Date(this.valueOf());
}
function sh() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function ih() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function lh() {
  return this.isValid() ? this.toISOString() : null;
}
function oh() {
  return ss(this);
}
function uh() {
  return Ot({}, G(this));
}
function ch() {
  return G(this).overflow;
}
function dh() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
N("N", 0, 0, "eraAbbr");
N("NN", 0, 0, "eraAbbr");
N("NNN", 0, 0, "eraAbbr");
N("NNNN", 0, 0, "eraName");
N("NNNNN", 0, 0, "eraNarrow");
N("y", ["y", 1], "yo", "eraYear");
N("y", ["yy", 2], 0, "eraYear");
N("y", ["yyy", 3], 0, "eraYear");
N("y", ["yyyy", 4], 0, "eraYear");
I("N", ws);
I("NN", ws);
I("NNN", ws);
I("NNNN", kh);
I("NNNNN", wh);
ie(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var r = n._locale.erasParse(e, a, n._strict);
    r ? G(n).era = r : G(n).invalidEra = e;
  }
);
I("y", mn);
I("yy", mn);
I("yyy", mn);
I("yyyy", mn);
I("yo", Ch);
ie(["y", "yy", "yyy", "yyyy"], Oe);
ie(["yo"], function(e, t, n, a) {
  var r;
  n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Oe] = n._locale.eraYearOrdinalParse(e, r) : t[Oe] = parseInt(e, 10);
});
function fh(e, t) {
  var n, a, r, s = this._eras || xt("en")._eras;
  for (n = 0, a = s.length; n < a; ++n) {
    switch (typeof s[n].since) {
      case "string":
        r = p(s[n].since).startOf("day"), s[n].since = r.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        r = p(s[n].until).startOf("day").valueOf(), s[n].until = r.valueOf();
        break;
    }
  }
  return s;
}
function vh(e, t, n) {
  var a, r, s = this.eras(), i, l, u;
  for (e = e.toUpperCase(), a = 0, r = s.length; a < r; ++a)
    if (i = s[a].name.toUpperCase(), l = s[a].abbr.toUpperCase(), u = s[a].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return s[a];
          break;
        case "NNNN":
          if (i === e)
            return s[a];
          break;
        case "NNNNN":
          if (u === e)
            return s[a];
          break;
      }
    else if ([i, l, u].indexOf(e) >= 0)
      return s[a];
}
function mh(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * n;
}
function hh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function gh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function yh() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function _h() {
  var e, t, n, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - p(r[e].since).year()) * n + r[e].offset;
  return this.year();
}
function Sh(e) {
  return ae(this, "_erasNameRegex") || Cs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ph(e) {
  return ae(this, "_erasAbbrRegex") || Cs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function bh(e) {
  return ae(this, "_erasNarrowRegex") || Cs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ws(e, t) {
  return t.erasAbbrRegex(e);
}
function kh(e, t) {
  return t.erasNameRegex(e);
}
function wh(e, t) {
  return t.erasNarrowRegex(e);
}
function Ch(e, t) {
  return t._eraYearOrdinalRegex || mn;
}
function Cs() {
  var e = [], t = [], n = [], a = [], r, s, i, l, u, c = this.eras();
  for (r = 0, s = c.length; r < s; ++r)
    i = St(c[r].name), l = St(c[r].abbr), u = St(c[r].narrow), t.push(i), e.push(l), n.push(u), a.push(i), a.push(l), a.push(u);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
N(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
N(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ga(e, t) {
  N(0, [e, e.length], 0, t);
}
Ga("gggg", "weekYear");
Ga("ggggg", "weekYear");
Ga("GGGG", "isoWeekYear");
Ga("GGGGG", "isoWeekYear");
I("G", Wa);
I("g", Wa);
I("GG", ve, He);
I("gg", ve, He);
I("GGGG", ds, cs);
I("gggg", ds, cs);
I("GGGGG", Ba, Fa);
I("ggggg", Ba, Fa);
Gn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = X(e);
  }
);
Gn(["gg", "GG"], function(e, t, n, a) {
  t[a] = p.parseTwoDigitYear(e);
});
function Ph(e) {
  return Yo.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function xh(e) {
  return Yo.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Mh() {
  return pt(this.year(), 1, 4);
}
function Th() {
  return pt(this.isoWeekYear(), 1, 4);
}
function Dh() {
  var e = this.localeData()._week;
  return pt(this.year(), e.dow, e.doy);
}
function Oh() {
  var e = this.localeData()._week;
  return pt(this.weekYear(), e.dow, e.doy);
}
function Yo(e, t, n, a, r) {
  var s;
  return e == null ? Rn(this, a, r).year : (s = pt(e, a, r), t > s && (t = s), Eh.call(this, e, t, n, a, r));
}
function Eh(e, t, n, a, r) {
  var s = ho(e, t, n, a, r), i = In(s.year, 0, s.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
N("Q", 0, "Qo", "quarter");
I("Q", ao);
ie("Q", function(e, t) {
  t[yt] = (X(e) - 1) * 3;
});
function Ah(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
N("D", ["DD", 2], "Do", "date");
I("D", ve, hn);
I("DD", ve, He);
I("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
ie(["D", "DD"], st);
ie("Do", function(e, t) {
  t[st] = X(e.match(ve)[0]);
});
var Lo = gn("Date", !0);
N("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
I("DDD", $a);
I("DDDD", ro);
ie(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = X(e);
});
function Vh(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
N("m", ["mm", 2], 0, "minute");
I("m", ve, fs);
I("mm", ve, He);
ie(["m", "mm"], Qe);
var Ih = gn("Minutes", !1);
N("s", ["ss", 2], 0, "second");
I("s", ve, fs);
I("ss", ve, He);
ie(["s", "ss"], _t);
var Rh = gn("Seconds", !1);
N("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
N(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
N(0, ["SSS", 3], 0, "millisecond");
N(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
N(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
N(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
N(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
N(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
N(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
I("S", $a, ao);
I("SS", $a, He);
I("SSS", $a, ro);
var Et, No;
for (Et = "SSSS"; Et.length <= 9; Et += "S")
  I(Et, mn);
function Yh(e, t) {
  t[Ft] = X(("0." + e) * 1e3);
}
for (Et = "S"; Et.length <= 9; Et += "S")
  ie(Et, Yh);
No = gn("Milliseconds", !1);
N("z", 0, 0, "zoneAbbr");
N("zz", 0, 0, "zoneName");
function Lh() {
  return this._isUTC ? "UTC" : "";
}
function Nh() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var M = jn.prototype;
M.add = Om;
M.calendar = Lm;
M.clone = Nm;
M.diff = jm;
M.endOf = th;
M.format = qm;
M.from = Zm;
M.fromNow = Xm;
M.to = Jm;
M.toNow = Qm;
M.get = Kf;
M.invalidAt = ch;
M.isAfter = Fm;
M.isBefore = $m;
M.isBetween = Bm;
M.isSame = Wm;
M.isSameOrAfter = Um;
M.isSameOrBefore = Hm;
M.isValid = oh;
M.lang = Eo;
M.locale = Oo;
M.localeData = Ao;
M.max = om;
M.min = lm;
M.parsingFlags = uh;
M.set = qf;
M.startOf = eh;
M.subtract = Em;
M.toArray = sh;
M.toObject = ih;
M.toDate = rh;
M.toISOString = Gm;
M.inspect = Km;
typeof Symbol < "u" && Symbol.for != null && (M[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
M.toJSON = lh;
M.toString = zm;
M.unix = ah;
M.valueOf = nh;
M.creationData = dh;
M.eraName = hh;
M.eraNarrow = gh;
M.eraAbbr = yh;
M.eraYear = _h;
M.year = lo;
M.isLeapYear = Gf;
M.weekYear = Ph;
M.isoWeekYear = xh;
M.quarter = M.quarters = Ah;
M.month = vo;
M.daysInMonth = rv;
M.week = M.weeks = fv;
M.isoWeek = M.isoWeeks = vv;
M.weeksInYear = Dh;
M.weeksInWeekYear = Oh;
M.isoWeeksInYear = Mh;
M.isoWeeksInISOWeekYear = Th;
M.date = Lo;
M.day = M.days = xv;
M.weekday = Mv;
M.isoWeekday = Tv;
M.dayOfYear = Vh;
M.hour = M.hours = Rv;
M.minute = M.minutes = Ih;
M.second = M.seconds = Rh;
M.millisecond = M.milliseconds = No;
M.utcOffset = ym;
M.utc = Sm;
M.local = pm;
M.parseZone = bm;
M.hasAlignedHourOffset = km;
M.isDST = wm;
M.isLocal = Pm;
M.isUtcOffset = xm;
M.isUtc = xo;
M.isUTC = xo;
M.zoneAbbr = Lh;
M.zoneName = Nh;
M.dates = Ze(
  "dates accessor is deprecated. Use date instead.",
  Lo
);
M.months = Ze(
  "months accessor is deprecated. Use month instead",
  vo
);
M.years = Ze(
  "years accessor is deprecated. Use year instead",
  lo
);
M.zone = Ze(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  _m
);
M.isDSTShifted = Ze(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Cm
);
function Fh(e) {
  return fe(e * 1e3);
}
function $h() {
  return fe.apply(null, arguments).parseZone();
}
function Fo(e) {
  return e;
}
var re = ls.prototype;
re.calendar = Pf;
re.longDateFormat = Df;
re.invalidDate = Ef;
re.ordinal = If;
re.preparse = Fo;
re.postformat = Fo;
re.relativeTime = Yf;
re.pastFuture = Lf;
re.set = wf;
re.eras = fh;
re.erasParse = vh;
re.erasConvertYear = mh;
re.erasAbbrRegex = ph;
re.erasNameRegex = Sh;
re.erasNarrowRegex = bh;
re.months = ev;
re.monthsShort = tv;
re.monthsParse = av;
re.monthsRegex = iv;
re.monthsShortRegex = sv;
re.week = ov;
re.firstDayOfYear = dv;
re.firstDayOfWeek = cv;
re.weekdays = bv;
re.weekdaysMin = wv;
re.weekdaysShort = kv;
re.weekdaysParse = Pv;
re.weekdaysRegex = Dv;
re.weekdaysShortRegex = Ov;
re.weekdaysMinRegex = Ev;
re.isPM = Vv;
re.meridiem = Yv;
function ka(e, t, n, a) {
  var r = xt(), s = vt().set(a, t);
  return r[n](s, e);
}
function $o(e, t, n) {
  if (wt(e) && (t = e, e = void 0), e = e || "", t != null)
    return ka(e, t, n, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = ka(e, a, n, "month");
  return r;
}
function Ps(e, t, n, a) {
  typeof e == "boolean" ? (wt(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, wt(t) && (n = t, t = void 0), t = t || "");
  var r = xt(), s = e ? r._week.dow : 0, i, l = [];
  if (n != null)
    return ka(t, (n + s) % 7, a, "day");
  for (i = 0; i < 7; i++)
    l[i] = ka(t, (i + s) % 7, a, "day");
  return l;
}
function Bh(e, t) {
  return $o(e, t, "months");
}
function Wh(e, t) {
  return $o(e, t, "monthsShort");
}
function Uh(e, t, n) {
  return Ps(e, t, n, "weekdays");
}
function Hh(e, t, n) {
  return Ps(e, t, n, "weekdaysShort");
}
function jh(e, t, n) {
  return Ps(e, t, n, "weekdaysMin");
}
At("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = X(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
p.lang = Ze(
  "moment.lang is deprecated. Use moment.locale instead.",
  At
);
p.langData = Ze(
  "moment.langData is deprecated. Use moment.localeData instead.",
  xt
);
var ht = Math.abs;
function zh() {
  var e = this._data;
  return this._milliseconds = ht(this._milliseconds), this._days = ht(this._days), this._months = ht(this._months), e.milliseconds = ht(e.milliseconds), e.seconds = ht(e.seconds), e.minutes = ht(e.minutes), e.hours = ht(e.hours), e.months = ht(e.months), e.years = ht(e.years), this;
}
function Bo(e, t, n, a) {
  var r = rt(t, n);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function Gh(e, t) {
  return Bo(this, e, t, 1);
}
function Kh(e, t) {
  return Bo(this, e, t, -1);
}
function ki(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function qh() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, r, s, i, l, u;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += ki(Tr(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, r = ze(e / 1e3), a.seconds = r % 60, s = ze(r / 60), a.minutes = s % 60, i = ze(s / 60), a.hours = i % 24, t += ze(i / 24), u = ze(Wo(t)), n += u, t -= ki(Tr(u)), l = ze(n / 12), n %= 12, a.days = t, a.months = n, a.years = l, this;
}
function Wo(e) {
  return e * 4800 / 146097;
}
function Tr(e) {
  return e * 146097 / 4800;
}
function Zh(e) {
  if (!this.isValid())
    return NaN;
  var t, n, a = this._milliseconds;
  if (e = Xe(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, n = this._months + Wo(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Tr(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Mt(e) {
  return function() {
    return this.as(e);
  };
}
var Uo = Mt("ms"), Xh = Mt("s"), Jh = Mt("m"), Qh = Mt("h"), eg = Mt("d"), tg = Mt("w"), ng = Mt("M"), ag = Mt("Q"), rg = Mt("y"), sg = Uo;
function ig() {
  return rt(this);
}
function lg(e) {
  return e = Xe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ht(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var og = Ht("milliseconds"), ug = Ht("seconds"), cg = Ht("minutes"), dg = Ht("hours"), fg = Ht("days"), vg = Ht("months"), mg = Ht("years");
function hg() {
  return ze(this.days() / 7);
}
var gt = Math.round, Zt = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function gg(e, t, n, a, r) {
  return r.relativeTime(t || 1, !!n, e, a);
}
function yg(e, t, n, a) {
  var r = rt(e).abs(), s = gt(r.as("s")), i = gt(r.as("m")), l = gt(r.as("h")), u = gt(r.as("d")), c = gt(r.as("M")), d = gt(r.as("w")), y = gt(r.as("y")), m = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || i <= 1 && ["m"] || i < n.m && ["mm", i] || l <= 1 && ["h"] || l < n.h && ["hh", l] || u <= 1 && ["d"] || u < n.d && ["dd", u];
  return n.w != null && (m = m || d <= 1 && ["w"] || d < n.w && ["ww", d]), m = m || c <= 1 && ["M"] || c < n.M && ["MM", c] || y <= 1 && ["y"] || ["yy", y], m[2] = t, m[3] = +e > 0, m[4] = a, gg.apply(null, m);
}
function _g(e) {
  return e === void 0 ? gt : typeof e == "function" ? (gt = e, !0) : !1;
}
function Sg(e, t) {
  return Zt[e] === void 0 ? !1 : t === void 0 ? Zt[e] : (Zt[e] = t, e === "s" && (Zt.ss = t - 1), !0);
}
function pg(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Zt, r, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Zt, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), s = yg(this, !n, a, r), n && (s = r.pastFuture(+this, s)), r.postformat(s);
}
var ur = Math.abs;
function zt(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ka() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ur(this._milliseconds) / 1e3, t = ur(this._days), n = ur(this._months), a, r, s, i, l = this.asSeconds(), u, c, d, y;
  return l ? (a = ze(e / 60), r = ze(a / 60), e %= 60, a %= 60, s = ze(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", c = zt(this._months) !== zt(l) ? "-" : "", d = zt(this._days) !== zt(l) ? "-" : "", y = zt(this._milliseconds) !== zt(l) ? "-" : "", u + "P" + (s ? c + s + "Y" : "") + (n ? c + n + "M" : "") + (t ? d + t + "D" : "") + (r || a || e ? "T" : "") + (r ? y + r + "H" : "") + (a ? y + a + "M" : "") + (e ? y + i + "S" : "")) : "P0D";
}
var Q = za.prototype;
Q.isValid = vm;
Q.abs = zh;
Q.add = Gh;
Q.subtract = Kh;
Q.as = Zh;
Q.asMilliseconds = Uo;
Q.asSeconds = Xh;
Q.asMinutes = Jh;
Q.asHours = Qh;
Q.asDays = eg;
Q.asWeeks = tg;
Q.asMonths = ng;
Q.asQuarters = ag;
Q.asYears = rg;
Q.valueOf = sg;
Q._bubble = qh;
Q.clone = ig;
Q.get = lg;
Q.milliseconds = og;
Q.seconds = ug;
Q.minutes = cg;
Q.hours = dg;
Q.days = fg;
Q.weeks = hg;
Q.months = vg;
Q.years = mg;
Q.humanize = pg;
Q.toISOString = Ka;
Q.toString = Ka;
Q.toJSON = Ka;
Q.locale = Oo;
Q.localeData = Ao;
Q.toIsoString = Ze(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ka
);
Q.lang = Eo;
N("X", 0, 0, "unix");
N("x", 0, 0, "valueOf");
I("x", Wa);
I("X", Bf);
ie("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
ie("x", function(e, t, n) {
  n._d = new Date(X(e));
});
//! moment.js
p.version = "2.30.1";
bf(fe);
p.fn = M;
p.min = um;
p.max = cm;
p.now = dm;
p.utc = vt;
p.unix = Fh;
p.months = Bh;
p.isDate = Hn;
p.locale = At;
p.invalid = Na;
p.duration = rt;
p.isMoment = at;
p.weekdays = Uh;
p.parseZone = $h;
p.localeData = xt;
p.isDuration = aa;
p.monthsShort = Wh;
p.weekdaysMin = jh;
p.defineLocale = ys;
p.updateLocale = $v;
p.locales = Bv;
p.weekdaysShort = Hh;
p.normalizeUnits = Xe;
p.relativeTimeRounding = _g;
p.relativeTimeThreshold = Sg;
p.calendarFormat = Ym;
p.prototype = M;
p.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const ge = "YYYY-MM-DD", bg = "YYYY-MM", kg = "MMM D, YYYY", xe = String(p().format(ge)), wg = [
  String(p(xe).subtract(1, "weeks").startOf("isoWeek").format(ge)),
  String(p(xe).subtract(1, "weeks").endOf("isoWeek").format(ge))
], Cg = [
  String(p(xe).subtract(1, "month").startOf("month").format(ge)),
  String(p(xe).subtract(1, "month").endOf("month").format(ge))
], Pg = [
  String(p(xe).subtract(3, "month").startOf("month").format(ge)),
  String(p(xe).subtract(1, "month").endOf("month").format(ge))
], xg = [
  String(p(xe).subtract(7, "day").format(ge)),
  String(p(xe).subtract(1, "day").format(ge))
], Mg = [
  String(p(xe).subtract(30, "day").format(ge)),
  String(p(xe).subtract(1, "day").format(ge))
], Tg = [
  String(p(xe).subtract(90, "day").format(ge)),
  String(p(xe).subtract(1, "day").format(ge))
], Dg = [
  String(p(xe).subtract(1, "year").startOf("Year").format(ge)),
  String(p(xe).subtract(1, "year").endOf("Year").format(ge))
], Og = [
  String(p(xe).startOf("Year").format(ge)),
  String(p(xe).format(ge))
], Eg = ([e, t]) => {
  const n = p(t).diff(p(e), "days") + 1;
  return [
    String(p(e).subtract(n, "days").format(ge)),
    String(p(t).subtract(n, "days").format(ge))
  ];
}, Ag = ([e, t]) => [
  String(p(e).subtract(1, "month").format(ge)),
  String(p(t).subtract(1, "month").format(ge))
], Vg = ([e, t]) => [
  String(p(e).subtract(1, "year").format(ge)),
  String(p(t).subtract(1, "year").format(ge))
], Ig = (e, t) => {
  let n = [], a = new Date(e);
  for (; a <= new Date(t); )
    n.push(new Date(a)), a.setDate(a.getDate() + 1);
  return n;
}, Rg = (e) => {
  const t = new Date(e).getFullYear(), n = new Date(e).getMonth();
  return new Date(t, n + 1, 0);
}, Dr = {
  LAST_WEEK: wg,
  LAST_MONTH: Cg,
  LAST_3_MONTHS: Pg,
  LAST_7_DAYS: xg,
  LAST_30_DAYS: Mg,
  LAST_90_DAYS: Tg,
  LAST_YEAR: Dg,
  THIS_YEAR: Og
}, Or = {
  PREVIOUS_PERIOD: Eg,
  PREVIOUS_MONTH: Ag,
  PREVIOUS_YEAR: Vg
}, Y = {
  TODAY: xe,
  DATE_FORMAT: ge,
  MONTH_FORMAT: bg,
  DEFAULT_FORMAT: kg,
  ...Dr,
  ...Or,
  getDatesBetween: Ig,
  getLastDayOfMonth: Rg
}, xs = {
  __name: "PresetsPrimary",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  setup(e) {
    const n = e.piniaStore, a = f(() => n.getPrimaryPreset);
    return (r, s) => (Z(), je("div", null, [
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_7_DAYS" ? "primary" : null,
        onClick: s[0] || (s[0] = (i) => V(n).SET_PRIMARY_PRESET("LAST_7_DAYS"))
      }, {
        default: T(() => [
          be(" Last 7 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_30_DAYS" ? "primary" : null,
        onClick: s[1] || (s[1] = (i) => V(n).SET_PRIMARY_PRESET("LAST_30_DAYS"))
      }, {
        default: T(() => [
          be(" Last 30 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_90_DAYS" ? "primary" : null,
        onClick: s[2] || (s[2] = (i) => V(n).SET_PRIMARY_PRESET("LAST_90_DAYS"))
      }, {
        default: T(() => [
          be(" Last 90 days ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_WEEK" ? "primary" : null,
        onClick: s[3] || (s[3] = (i) => V(n).SET_PRIMARY_PRESET("LAST_WEEK"))
      }, {
        default: T(() => [
          be(" Last week ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_MONTH" ? "primary" : null,
        onClick: s[4] || (s[4] = (i) => V(n).SET_PRIMARY_PRESET("LAST_MONTH"))
      }, {
        default: T(() => [
          be(" Last month ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_3_MONTHS" ? "primary" : null,
        onClick: s[5] || (s[5] = (i) => V(n).SET_PRIMARY_PRESET("LAST_3_MONTHS"))
      }, {
        default: T(() => [
          be(" Last 3 months ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "LAST_YEAR" ? "primary" : null,
        onClick: s[6] || (s[6] = (i) => V(n).SET_PRIMARY_PRESET("LAST_YEAR"))
      }, {
        default: T(() => [
          be(" Last Year ")
        ]),
        _: 1
      }, 8, ["color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        color: a.value === "THIS_YEAR" ? "primary" : null,
        onClick: s[7] || (s[7] = (i) => V(n).SET_PRIMARY_PRESET("THIS_YEAR"))
      }, {
        default: T(() => [
          be(" This Year ")
        ]),
        _: 1
      }, 8, ["color"])
    ]));
  }
}, Ms = {
  __name: "PresetsCompare",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  setup(e) {
    const n = e.piniaStore, a = f(() => n.getCompareState), r = f(() => n.getComparePreset);
    return (s, i) => (Z(), je("div", null, [
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_PERIOD" ? "primary" : null,
        onClick: i[0] || (i[0] = (l) => V(n).SET_COMPARE_PRESET("PREVIOUS_PERIOD"))
      }, {
        default: T(() => [
          be(" Previous period ")
        ]),
        _: 1
      }, 8, ["disabled", "color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_MONTH" ? "primary" : null,
        onClick: i[1] || (i[1] = (l) => V(n).SET_COMPARE_PRESET("PREVIOUS_MONTH"))
      }, {
        default: T(() => [
          be(" Previous month ")
        ]),
        _: 1
      }, 8, ["disabled", "color"]),
      o(le, {
        size: "x-small",
        variant: "flat",
        disabled: !a.value,
        color: r.value === "PREVIOUS_YEAR" ? "primary" : null,
        onClick: i[2] || (i[2] = (l) => V(n).SET_COMPARE_PRESET("PREVIOUS_YEAR"))
      }, {
        default: T(() => [
          be(" Previous year ")
        ]),
        _: 1
      }, 8, ["disabled", "color"])
    ]));
  }
}, qa = B()({
  name: "VCardActions",
  props: ee(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Wn({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), z(() => o("div", {
      class: ["v-card-actions", e.class],
      style: e.style
    }, [n.default?.()])), {};
  }
}), Yg = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VCardSubtitle"), Lg = B()({
  name: "VCardSubtitle",
  props: Yg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Ng = xa("v-card-title"), Fg = A({
  appendAvatar: String,
  appendIcon: ye,
  prependAvatar: String,
  prependIcon: ye,
  subtitle: [String, Number],
  title: [String, Number],
  ...ee(),
  ...Pt()
}, "VCardItem"), $g = B()({
  name: "VCardItem",
  props: Fg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => {
      const a = !!(e.prependAvatar || e.prependIcon), r = !!(a || n.prepend), s = !!(e.appendAvatar || e.appendIcon), i = !!(s || n.append), l = !!(e.title != null || n.title), u = !!(e.subtitle != null || n.subtitle);
      return o("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [r && o("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? o(Pe, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, n.prepend) : o(Ae, null, [e.prependAvatar && o(ga, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && o(lt, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), o("div", {
        class: "v-card-item__content"
      }, [l && o(Ng, {
        key: "title"
      }, {
        default: () => [n.title?.() ?? e.title]
      }), u && o(Lg, {
        key: "subtitle"
      }, {
        default: () => [n.subtitle?.() ?? e.subtitle]
      }), n.default?.()]), i && o("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? o(Pe, {
        key: "append-defaults",
        disabled: !s,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, n.append) : o(Ae, null, [e.appendIcon && o(lt, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && o(ga, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Bg = A({
  opacity: [Number, String],
  ...ee(),
  ...Ce()
}, "VCardText"), Za = B()({
  name: "VCardText",
  props: Bg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Wg = A({
  appendAvatar: String,
  appendIcon: ye,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...on(),
  ...ee(),
  ...Pt(),
  ...Rt(),
  ...cn(),
  ...jr(),
  ...Aa(),
  ...Gr(),
  ...dt(),
  ...Zr(),
  ...Ce(),
  ...Ee(),
  ...fn({
    variant: "elevated"
  })
}, "VCard"), Ug = B()({
  name: "VCard",
  directives: {
    Ripple: Ia
  },
  props: Wg(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = Re(e), {
      borderClasses: s
    } = un(e), {
      colorClasses: i,
      colorStyles: l,
      variantClasses: u
    } = Ta(e), {
      densityClasses: c
    } = It(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: y
    } = dn(e), {
      loaderClasses: m
    } = zr(e), {
      locationStyles: v
    } = Va(e), {
      positionClasses: g
    } = Kr(e), {
      roundedClasses: h
    } = ft(e), S = qr(e, n), _ = f(() => e.link !== !1 && S.isLink.value), x = f(() => !e.disabled && e.link !== !1 && (e.link || S.isClickable.value));
    return z(() => {
      const D = _.value ? "a" : e.tag, k = !!(a.title || e.title != null), P = !!(a.subtitle || e.subtitle != null), E = k || P, w = !!(a.append || e.appendAvatar || e.appendIcon), $ = !!(a.prepend || e.prependAvatar || e.prependIcon), O = !!(a.image || e.image), F = E || $ || w, L = !!(a.text || e.text != null);
      return tt(o(D, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": x.value
        }, r.value, s.value, i.value, c.value, y.value, m.value, g.value, h.value, u.value, e.class],
        style: [l.value, d.value, v.value, e.style],
        href: S.href.value,
        onClick: x.value && S.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => [O && o("div", {
          key: "image",
          class: "v-card__image"
        }, [a.image ? o(Pe, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, a.image) : o(Wl, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), o(ol, {
          name: "v-card",
          active: !!e.loading,
          color: typeof e.loading == "boolean" ? void 0 : e.loading
        }, {
          default: a.loader
        }), F && o($g, {
          key: "item",
          prependAvatar: e.prependAvatar,
          prependIcon: e.prependIcon,
          title: e.title,
          subtitle: e.subtitle,
          appendAvatar: e.appendAvatar,
          appendIcon: e.appendIcon
        }, {
          default: a.item,
          prepend: a.prepend,
          title: a.title,
          subtitle: a.subtitle,
          append: a.append
        }), L && o(Za, {
          key: "text"
        }, {
          default: () => [a.text?.() ?? e.text]
        }), a.default?.(), a.actions && o(qa, null, {
          default: a.actions
        }), Ma(x.value, "v-card")]
      }), [[ln("ripple"), x.value && e.ripple]]);
    }), {};
  }
}), Hg = A({
  text: String,
  onClick: Fe(),
  ...ee(),
  ...Ee()
}, "VLabel"), Ho = B()({
  name: "VLabel",
  props: Hg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o("label", {
      class: ["v-label", {
        "v-label--clickable": !!e.onClick
      }, e.class],
      style: e.style,
      onClick: e.onClick
    }, [e.text, n.default?.()])), {};
  }
}), jo = Symbol.for("vuetify:selection-control-group"), zo = A({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ye,
  trueIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: Bn
  },
  ...ee(),
  ...Pt(),
  ...Ee()
}, "SelectionControlGroup"), jg = A({
  ...zo({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
B()({
  name: "VSelectionControlGroup",
  props: jg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "modelValue"), r = ct(), s = f(() => e.id || `v-selection-control-group-${r}`), i = f(() => e.name || s.value), l = /* @__PURE__ */ new Set();
    return Ke(jo, {
      modelValue: a,
      forceUpdate: () => {
        l.forEach((u) => u());
      },
      onForceUpdate: (u) => {
        l.add(u), qe(() => {
          l.delete(u);
        });
      }
    }), Wn({
      [e.defaultsTarget]: {
        color: W(e, "color"),
        disabled: W(e, "disabled"),
        density: W(e, "density"),
        error: W(e, "error"),
        inline: W(e, "inline"),
        modelValue: a,
        multiple: f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: i,
        falseIcon: W(e, "falseIcon"),
        trueIcon: W(e, "trueIcon"),
        readonly: W(e, "readonly"),
        ripple: W(e, "ripple"),
        type: W(e, "type"),
        valueComparator: W(e, "valueComparator")
      }
    }), z(() => o("div", {
      class: ["v-selection-control-group", {
        "v-selection-control-group--inline": e.inline
      }, e.class],
      style: e.style,
      role: e.type === "radio" ? "radiogroup" : void 0
    }, [n.default?.()])), {};
  }
});
const Go = A({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ee(),
  ...zo()
}, "VSelectionControl");
function zg(e) {
  const t = Me(jo, void 0), {
    densityClasses: n
  } = It(e), a = _e(e, "modelValue"), r = f(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), s = f(() => e.falseValue !== void 0 ? e.falseValue : !1), i = f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), l = f({
    get() {
      const v = t ? t.modelValue.value : a.value;
      return i.value ? Ie(v).some((g) => e.valueComparator(g, r.value)) : e.valueComparator(v, r.value);
    },
    set(v) {
      if (e.readonly) return;
      const g = v ? r.value : s.value;
      let h = g;
      i.value && (h = v ? [...Ie(a.value), g] : Ie(a.value).filter((S) => !e.valueComparator(S, r.value))), t ? t.modelValue.value = h : a.value = h;
    }
  }), {
    textColorClasses: u,
    textColorStyles: c
  } = kt(f(() => {
    if (!(e.error || e.disabled))
      return l.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: y
  } = et(f(() => l.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = f(() => l.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: r,
    falseValue: s,
    model: l,
    textColorClasses: u,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: y,
    icon: m
  };
}
const wi = B()({
  name: "VSelectionControl",
  directives: {
    Ripple: Ia
  },
  inheritAttrs: !1,
  props: Go(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: r,
      densityClasses: s,
      icon: i,
      model: l,
      textColorClasses: u,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: y,
      trueValue: m
    } = zg(e), v = ct(), g = se(!1), h = se(!1), S = H(), _ = f(() => e.id || `input-${v}`), x = f(() => !e.disabled && !e.readonly);
    r?.onForceUpdate(() => {
      S.value && (S.value.checked = l.value);
    });
    function D(w) {
      x.value && (g.value = !0, Xi(w.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function k() {
      g.value = !1, h.value = !1;
    }
    function P(w) {
      w.stopPropagation();
    }
    function E(w) {
      if (!x.value) {
        S.value && (S.value.checked = l.value);
        return;
      }
      e.readonly && r && Be(() => r.forceUpdate()), l.value = w.target.checked;
    }
    return z(() => {
      const w = a.label ? a.label({
        label: e.label,
        props: {
          for: _.value
        }
      }) : e.label, [$, O] = Nr(n), F = o("input", K({
        ref: S,
        checked: l.value,
        disabled: !!e.disabled,
        id: _.value,
        onBlur: k,
        onFocus: D,
        onInput: E,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? l.value : void 0
      }, O), null);
      return o("div", K({
        class: ["v-selection-control", {
          "v-selection-control--dirty": l.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": g.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, s.value, e.class]
      }, $, {
        style: e.style
      }), [o("div", {
        class: ["v-selection-control__wrapper", u.value],
        style: c.value
      }, [a.default?.({
        backgroundColorClasses: d,
        backgroundColorStyles: y
      }), tt(o("div", {
        class: ["v-selection-control__input"]
      }, [a.input?.({
        model: l,
        textColorClasses: u,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: y,
        inputNode: F,
        icon: i.value,
        props: {
          onFocus: D,
          onBlur: k,
          id: _.value
        }
      }) ?? o(Ae, null, [i.value && o(lt, {
        key: "icon",
        icon: i.value
      }, null), F])]), [[ln("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), w && o(Ho, {
        for: _.value,
        onClick: P
      }, {
        default: () => [w]
      })]);
    }), {
      isFocused: g,
      input: S
    };
  }
}), Ko = A({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ye,
    default: "$checkboxIndeterminate"
  },
  ...Go({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Ci = B()({
  name: "VCheckboxBtn",
  props: Ko(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _e(e, "indeterminate"), r = _e(e, "modelValue");
    function s(u) {
      a.value && (a.value = !1);
    }
    const i = f(() => a.value ? e.indeterminateIcon : e.falseIcon), l = f(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return z(() => {
      const u = bt(wi.filterProps(e), ["modelValue"]);
      return o(wi, K(u, {
        modelValue: r.value,
        "onUpdate:modelValue": [(c) => r.value = c, s],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: i.value,
        trueIcon: l.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function qo(e) {
  const {
    t
  } = Hr();
  function n(a) {
    let {
      name: r
    } = a;
    const s = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[r], i = e[`onClick:${r}`], l = i && s ? t(`$vuetify.input.${s}`, e.label ?? "") : void 0;
    return o(lt, {
      icon: e[`${r}Icon`],
      "aria-label": l,
      onClick: i
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Gg = A({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ee(),
  ...La({
    transition: {
      component: Ol,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Kg = B()({
  name: "VMessages",
  props: Gg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => Ie(e.messages)), {
      textColorClasses: r,
      textColorStyles: s
    } = kt(f(() => e.color));
    return z(() => o(it, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", r.value, e.class],
      style: [s.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((i, l) => o("div", {
        class: "v-messages__message",
        key: `${l}-${a.value}`
      }, [n.message ? n.message({
        message: i
      }) : i]))]
    })), {};
  }
}), Zo = A({
  focused: Boolean,
  "onUpdate:focused": Fe()
}, "focus");
function Ts(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
  const n = _e(e, "focused"), a = f(() => ({
    [`${t}--focused`]: n.value
  }));
  function r() {
    n.value = !0;
  }
  function s() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: r,
    blur: s
  };
}
const qg = Symbol.for("vuetify:form");
function Zg() {
  return Me(qg, null);
}
const Xg = A({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Zo()
}, "validation");
function Jg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ct();
  const a = _e(e, "modelValue"), r = f(() => e.validationValue === void 0 ? a.value : e.validationValue), s = Zg(), i = H([]), l = se(!0), u = f(() => !!(Ie(a.value === "" ? null : a.value).length || Ie(r.value === "" ? null : r.value).length)), c = f(() => !!(e.disabled ?? s?.isDisabled.value)), d = f(() => !!(e.readonly ?? s?.isReadonly.value)), y = f(() => e.errorMessages?.length ? Ie(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value), m = f(() => {
    let P = (e.validateOn ?? s?.validateOn.value) || "input";
    P === "lazy" && (P = "input lazy");
    const E = new Set(P?.split(" ") ?? []);
    return {
      blur: E.has("blur") || E.has("input"),
      input: E.has("input"),
      submit: E.has("submit"),
      lazy: E.has("lazy")
    };
  }), v = f(() => e.error || e.errorMessages?.length ? !1 : e.rules.length ? l.value ? i.value.length || m.value.lazy ? null : !0 : !i.value.length : !0), g = se(!1), h = f(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: c.value,
    [`${t}--readonly`]: d.value
  })), S = Te("validation"), _ = f(() => e.name ?? V(n));
  Ir(() => {
    s?.register({
      id: _.value,
      vm: S,
      validate: k,
      reset: x,
      resetValidation: D
    });
  }), Ct(() => {
    s?.unregister(_.value);
  }), sn(async () => {
    m.value.lazy || await k(!0), s?.update(_.value, v.value, y.value);
  }), an(() => m.value.input, () => {
    J(r, () => {
      if (r.value != null)
        k();
      else if (e.focused) {
        const P = J(() => e.focused, (E) => {
          E || k(), P();
        });
      }
    });
  }), an(() => m.value.blur, () => {
    J(() => e.focused, (P) => {
      P || k();
    });
  }), J([v, y], () => {
    s?.update(_.value, v.value, y.value);
  });
  async function x() {
    a.value = null, await Be(), await D();
  }
  async function D() {
    l.value = !0, m.value.lazy ? i.value = [] : await k(!0);
  }
  async function k() {
    let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const E = [];
    g.value = !0;
    for (const w of e.rules) {
      if (E.length >= +(e.maxErrors ?? 1))
        break;
      const O = await (typeof w == "function" ? w : () => w)(r.value);
      if (O !== !0) {
        if (O !== !1 && typeof O != "string") {
          console.warn(`${O} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        E.push(O || "");
      }
    }
    return i.value = E, g.value = !1, l.value = P, i.value;
  }
  return {
    errorMessages: y,
    isDirty: u,
    isDisabled: c,
    isReadonly: d,
    isPristine: l,
    isValid: v,
    isValidating: g,
    reset: x,
    resetValidation: D,
    validate: k,
    validationClasses: h
  };
}
const Ds = A({
  id: String,
  appendIcon: ye,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ye,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Fe(),
  "onClick:append": Fe(),
  ...ee(),
  ...Pt(),
  ...Nu(Rt(), ["maxWidth", "minWidth", "width"]),
  ...Ee(),
  ...Xg()
}, "VInput"), wa = B()({
  name: "VInput",
  props: {
    ...Ds()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const {
      densityClasses: s
    } = It(e), {
      dimensionStyles: i
    } = Yt(e), {
      themeClasses: l
    } = Re(e), {
      rtlClasses: u
    } = vn(), {
      InputIcon: c
    } = qo(e), d = ct(), y = f(() => e.id || `input-${d}`), m = f(() => `${y.value}-messages`), {
      errorMessages: v,
      isDirty: g,
      isDisabled: h,
      isReadonly: S,
      isPristine: _,
      isValid: x,
      isValidating: D,
      reset: k,
      resetValidation: P,
      validate: E,
      validationClasses: w
    } = Jg(e, "v-input", y), $ = f(() => ({
      id: y,
      messagesId: m,
      isDirty: g,
      isDisabled: h,
      isReadonly: S,
      isPristine: _,
      isValid: x,
      isValidating: D,
      reset: k,
      resetValidation: P,
      validate: E
    })), O = f(() => e.errorMessages?.length || !_.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages);
    return z(() => {
      const F = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon), b = O.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (b || !!a.details);
      return o("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, s.value, l.value, u.value, w.value, e.class],
        style: [i.value, e.style]
      }, [F && o("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [a.prepend?.($.value), e.prependIcon && o(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && o("div", {
        class: "v-input__control"
      }, [a.default?.($.value)]), L && o("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && o(c, {
        key: "append-icon",
        name: "append"
      }, null), a.append?.($.value)]), C && o("div", {
        class: "v-input__details"
      }, [o(Kg, {
        id: m.value,
        active: b,
        messages: O.value
      }, {
        message: a.message
      }), a.details?.($.value)])]);
    }), {
      reset: k,
      resetValidation: P,
      validate: E,
      isValid: x,
      errorMessages: v
    };
  }
}), Qg = A({
  ...Ds(),
  ...bt(Ko(), ["inline"])
}, "VCheckbox"), Os = B()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Qg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = _e(e, "modelValue"), {
      isFocused: s,
      focus: i,
      blur: l
    } = Ts(e), u = ct(), c = f(() => e.id || `checkbox-${u}`);
    return z(() => {
      const [d, y] = Nr(n), m = wa.filterProps(e), v = Ci.filterProps(e);
      return o(wa, K({
        class: ["v-checkbox", e.class]
      }, d, m, {
        modelValue: r.value,
        "onUpdate:modelValue": (g) => r.value = g,
        id: c.value,
        focused: s.value,
        style: e.style
      }), {
        ...a,
        default: (g) => {
          let {
            id: h,
            messagesId: S,
            isDisabled: _,
            isReadonly: x,
            isValid: D
          } = g;
          return o(Ci, K(v, {
            id: h.value,
            "aria-describedby": S.value,
            disabled: _.value,
            readonly: x.value
          }, y, {
            error: D.value === !1,
            modelValue: r.value,
            "onUpdate:modelValue": (k) => r.value = k,
            onFocus: i,
            onBlur: l
          }), a);
        }
      });
    }), {};
  }
}), Xo = A({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: [String],
    default: "$next"
  },
  prevIcon: {
    type: [String],
    default: "$prev"
  },
  modeIcon: {
    type: [String],
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Pi = B()({
  name: "VDatePickerControls",
  props: Xo(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = f(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), r = f(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), s = f(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), i = f(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function l() {
      n("click:prev");
    }
    function u() {
      n("click:next");
    }
    function c() {
      n("click:year");
    }
    function d() {
      n("click:month");
    }
    return z(() => o("div", {
      class: ["v-date-picker-controls"]
    }, [o(le, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), o(le, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: r.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), o(Ya, {
      key: "mode-spacer"
    }, null), o("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [o(le, {
      disabled: s.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: l
    }, null), o(le, {
      disabled: i.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: u
    }, null)])])), {};
  }
}), ey = A({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: Fe()
}, "VDatePickerHeader"), xi = B()({
  name: "VDatePickerHeader",
  props: ey(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = et(e, "color");
    function i() {
      n("click");
    }
    function l() {
      n("click:append");
    }
    return z(() => {
      const u = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return o("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, r.value],
        style: s.value,
        onClick: i
      }, [a.prepend && o("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), u && o(it, {
        key: "content",
        name: e.transition
      }, {
        default: () => [o("div", {
          key: e.header,
          class: "v-date-picker-header__content"
        }, [a.default?.() ?? e.header])]
      }), c && o("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? o(Pe, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => [a.append?.()]
      }) : o(le, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: l
      }, null)])]);
    }), {};
  }
}), ty = Symbol.for("vuetify:date-options");
function ny(e, t) {
  const n = Ln(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return J(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Kn() {
  const e = Me(ty);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Hr();
  return ny(e, t);
}
function ay(e, t) {
  const n = e.toJsDate(t);
  let a = n.getFullYear(), r = new Date(a, 0, 1);
  if (n < r)
    a = a - 1, r = new Date(a, 0, 1);
  else {
    const l = new Date(a + 1, 0, 1);
    n >= l && (a = a + 1, r = l);
  }
  const s = Math.abs(n.getTime() - r.getTime()), i = Math.ceil(s / (1e3 * 60 * 60 * 24));
  return Math.floor(i / 7) + 1;
}
const ry = A({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  }
}, "calendar");
function sy(e) {
  const t = Kn(), n = _e(e, "modelValue", [], (m) => Ie(m)), a = f(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), r = _e(e, "year", void 0, (m) => {
    const v = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), v));
  }, (m) => t.getYear(m)), s = _e(e, "month", void 0, (m) => {
    const v = m != null ? Number(m) : t.getMonth(a.value), g = t.setYear(t.startOfMonth(t.date()), t.getYear(r.value));
    return t.setMonth(g, v);
  }, (m) => t.getMonth(m)), i = f(() => {
    const m = t.getWeekArray(s.value), v = m.flat(), g = 6 * 7;
    if (e.weeksInMonth === "static" && v.length < g) {
      const h = v[v.length - 1];
      let S = [];
      for (let _ = 1; _ <= g - v.length; _++)
        S.push(t.addDays(h, _)), _ % 7 === 0 && (m.push(S), S = []);
    }
    return m;
  });
  function l(m, v) {
    return m.filter((g) => e.weekdays.includes(t.toJsDate(g).getDay())).map((g, h) => {
      const S = t.toISO(g), _ = !t.isSameMonth(g, s.value), x = t.isSameDay(g, t.startOfMonth(s.value)), D = t.isSameDay(g, t.endOfMonth(s.value)), k = t.isSameDay(g, s.value);
      return {
        date: g,
        isoDate: S,
        formatted: t.format(g, "keyboardDate"),
        year: t.getYear(g),
        month: t.getMonth(g),
        isDisabled: y(g),
        isWeekStart: h % 7 === 0,
        isWeekEnd: h % 7 === 6,
        isToday: t.isSameDay(g, v),
        isAdjacent: _,
        isHidden: _ && !e.showAdjacentMonths,
        isStart: x,
        isSelected: n.value.some((P) => t.isSameDay(g, P)),
        isEnd: D,
        isSame: k,
        localized: t.format(g, "dayOfMonth")
      };
    });
  }
  const u = f(() => {
    const m = t.startOfWeek(a.value), v = [];
    for (let h = 0; h <= 6; h++)
      v.push(t.addDays(m, h));
    const g = t.date();
    return l(v, g);
  }), c = f(() => {
    const m = i.value.flat(), v = t.date();
    return l(m, v);
  }), d = f(() => i.value.map((m) => m.length ? ay(t, m[0]) : null));
  function y(m) {
    if (e.disabled) return !0;
    const v = t.date(m);
    return e.min && t.isAfter(t.date(e.min), v) || e.max && t.isAfter(v, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((g) => t.isSameDay(t.date(g), v)) : typeof e.allowedDates == "function" ? !e.allowedDates(v) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: c,
    daysInWeek: u,
    genDays: l,
    model: n,
    weeksInMonth: i,
    weekNumbers: d
  };
}
const Jo = A({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...ry()
}, "VDatePickerMonth"), Mi = B()({
  name: "VDatePickerMonth",
  props: Jo(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = H(), {
      daysInMonth: s,
      model: i,
      weekNumbers: l
    } = sy(e), u = Kn(), c = se(), d = se(), y = se(!1), m = f(() => y.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && i.value.length > 0 && (c.value = i.value[0], i.value.length > 1 && (d.value = i.value[i.value.length - 1]));
    const v = f(() => {
      const _ = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return i.value.length >= _;
    });
    J(s, (_, x) => {
      x && (y.value = u.isBefore(_[0].date, x[0].date));
    });
    function g(_) {
      const x = u.startOfDay(_);
      if (i.value.length === 0 && (c.value = void 0), !c.value)
        c.value = x, i.value = [c.value];
      else if (d.value)
        c.value = _, d.value = void 0, i.value = [c.value];
      else {
        if (u.isSameDay(x, c.value)) {
          c.value = void 0, i.value = [];
          return;
        } else u.isBefore(x, c.value) ? (d.value = u.endOfDay(c.value), c.value = x) : d.value = u.endOfDay(x);
        const D = u.getDiff(d.value, c.value, "days"), k = [c.value];
        for (let P = 1; P < D; P++) {
          const E = u.addDays(c.value, P);
          k.push(E);
        }
        k.push(d.value), i.value = k;
      }
    }
    function h(_) {
      const x = i.value.findIndex((D) => u.isSameDay(D, _));
      if (x === -1)
        i.value = [...i.value, _];
      else {
        const D = [...i.value];
        D.splice(x, 1), i.value = D;
      }
    }
    function S(_) {
      e.multiple === "range" ? g(_) : e.multiple ? h(_) : i.value = [_];
    }
    return () => o("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && o("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && o("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [be(" ")]), l.value.map((_) => o("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [_]))]), o(it, {
      name: m.value
    }, {
      default: () => [o("div", {
        ref: r,
        key: s.value[0].date?.toString(),
        class: "v-date-picker-month__days"
      }, [!e.hideWeekdays && u.getWeekdays().map((_) => o("div", {
        class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
      }, [_])), s.value.map((_, x) => {
        const D = {
          props: {
            onClick: () => S(_.date)
          },
          item: _,
          i: x
        };
        return v.value && !_.isSelected && (_.isDisabled = !0), o("div", {
          class: ["v-date-picker-month__day", {
            "v-date-picker-month__day--adjacent": _.isAdjacent,
            "v-date-picker-month__day--hide-adjacent": _.isHidden,
            "v-date-picker-month__day--selected": _.isSelected,
            "v-date-picker-month__day--week-end": _.isWeekEnd,
            "v-date-picker-month__day--week-start": _.isWeekStart
          }],
          "data-v-date": _.isDisabled ? void 0 : _.isoDate
        }, [(e.showAdjacentMonths || !_.isAdjacent) && o(Pe, {
          defaults: {
            VBtn: {
              class: "v-date-picker-month__day-btn",
              color: (_.isSelected || _.isToday) && !_.isDisabled ? e.color : void 0,
              disabled: _.isDisabled,
              icon: !0,
              ripple: !1,
              text: _.localized,
              variant: _.isDisabled ? _.isToday ? "outlined" : "text" : _.isToday && !_.isSelected ? "outlined" : "flat",
              onClick: () => S(_.date)
            }
          }
        }, {
          default: () => [a.day?.(D) ?? o(le, D.props, null)]
        })]);
      })])]
    })]);
  }
}), Qo = A({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), Ti = B()({
  name: "VDatePickerMonths",
  props: Qo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Kn(), s = _e(e, "modelValue"), i = f(() => {
      let l = r.startOfYear(r.date());
      return e.year && (l = r.setYear(l, e.year)), ji(12).map((u) => {
        const c = r.format(l, "monthShort"), d = !!(e.min && r.isAfter(r.startOfMonth(r.date(e.min)), l) || e.max && r.isAfter(l, r.startOfMonth(r.date(e.max))));
        return l = r.getNextMonth(l), {
          isDisabled: d,
          text: c,
          value: u
        };
      });
    });
    return Vt(() => {
      s.value = s.value ?? r.getMonth(r.date());
    }), z(() => o("div", {
      class: "v-date-picker-months",
      style: {
        height: q(e.height)
      }
    }, [o("div", {
      class: "v-date-picker-months__content"
    }, [i.value.map((l, u) => {
      const c = {
        active: s.value === u,
        color: s.value === u ? e.color : void 0,
        disabled: l.isDisabled,
        rounded: !0,
        text: l.text,
        variant: s.value === l.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(y) {
        if (s.value === y) {
          n("update:modelValue", s.value);
          return;
        }
        s.value = y;
      }
      return a.month?.({
        month: l,
        i: u,
        props: c
      }) ?? o(le, K({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), eu = A({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), Di = B()({
  name: "VDatePickerYears",
  props: eu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Kn(), s = _e(e, "modelValue"), i = f(() => {
      const u = r.getYear(r.date());
      let c = u - 100, d = u + 52;
      e.min && (c = r.getYear(r.date(e.min))), e.max && (d = r.getYear(r.date(e.max)));
      let y = r.startOfYear(r.date());
      return y = r.setYear(y, c), ji(d - c + 1, c).map((m) => {
        const v = r.format(y, "year");
        return y = r.setYear(y, r.getYear(y) + 1), {
          text: v,
          value: m
        };
      });
    });
    Vt(() => {
      s.value = s.value ?? r.getYear(r.date());
    });
    const l = da();
    return sn(async () => {
      await Be(), l.el?.scrollIntoView({
        block: "center"
      });
    }), z(() => o("div", {
      class: "v-date-picker-years",
      style: {
        height: q(e.height)
      }
    }, [o("div", {
      class: "v-date-picker-years__content"
    }, [i.value.map((u, c) => {
      const d = {
        ref: s.value === u.value ? l : void 0,
        active: s.value === u.value,
        color: s.value === u.value ? e.color : void 0,
        rounded: !0,
        text: u.text,
        variant: s.value === u.value ? "flat" : "text",
        onClick: () => {
          if (s.value === u.value) {
            n("update:modelValue", s.value);
            return;
          }
          s.value = u.value;
        }
      };
      return a.year?.({
        year: u,
        i: c,
        props: d
      }) ?? o(le, K({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), iy = xa("v-picker-title"), tu = A({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...Xl()
}, "VPicker"), Oi = B()({
  name: "VPicker",
  props: tu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: r
    } = et(W(e, "color"));
    return z(() => {
      const s = br.filterProps(e), i = !!(e.title || n.title);
      return o(br, K(s, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => [!e.hideHeader && o("div", {
          key: "header",
          class: [a.value],
          style: [r.value]
        }, [i && o(iy, {
          key: "picker-title"
        }, {
          default: () => [n.title?.() ?? e.title]
        }), n.header && o("div", {
          class: "v-picker__header"
        }, [n.header()])]), o("div", {
          class: "v-picker__body"
        }, [n.default?.()]), n.actions && o(Pe, {
          defaults: {
            VBtn: {
              slim: !0,
              variant: "text"
            }
          }
        }, {
          default: () => [o("div", {
            class: "v-picker__actions"
          }, [n.actions()])]
        })]
      });
    }), {};
  }
}), ly = A({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...Xo(),
  ...Jo({
    weeksInMonth: "static"
  }),
  ...bt(Qo(), ["modelValue"]),
  ...bt(eu(), ["modelValue"]),
  ...tu({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Xt = B()({
  name: "VDatePicker",
  props: ly(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = Kn(), {
      t: s
    } = Hr(), i = _e(e, "modelValue", void 0, (O) => Ie(O), (O) => e.multiple ? O : O[0]), l = _e(e, "viewMode"), u = f(() => {
      const O = r.date(i.value?.[0]);
      return O && r.isValid(O) ? O : r.date();
    }), c = H(Number(e.month ?? r.getMonth(r.startOfMonth(u.value)))), d = H(Number(e.year ?? r.getYear(r.startOfYear(r.setMonth(u.value, c.value))))), y = se(!1), m = f(() => e.multiple && i.value.length > 1 ? s("$vuetify.datePicker.itemsSelected", i.value.length) : i.value[0] && r.isValid(i.value[0]) ? r.format(r.date(i.value[0]), "normalDateWithWeekday") : s(e.header)), v = f(() => {
      let O = r.date();
      return O = r.setDate(O, 1), O = r.setMonth(O, c.value), O = r.setYear(O, d.value), r.format(O, "monthAndYear");
    }), g = f(() => `date-picker-header${y.value ? "-reverse" : ""}-transition`), h = f(() => {
      const O = r.date(e.min);
      return e.min && r.isValid(O) ? O : null;
    }), S = f(() => {
      const O = r.date(e.max);
      return e.max && r.isValid(O) ? O : null;
    }), _ = f(() => {
      if (e.disabled) return !0;
      const O = [];
      if (l.value !== "month")
        O.push("prev", "next");
      else {
        let F = r.date();
        if (F = r.setYear(F, d.value), F = r.setMonth(F, c.value), h.value) {
          const L = r.addDays(r.startOfMonth(F), -1);
          r.isAfter(h.value, L) && O.push("prev");
        }
        if (S.value) {
          const L = r.addDays(r.endOfMonth(F), 1);
          r.isAfter(L, S.value) && O.push("next");
        }
      }
      return O;
    });
    function x() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, $(d.value)), w(c.value);
    }
    function D() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, $(d.value)), w(c.value);
    }
    function k() {
      l.value = "month";
    }
    function P() {
      l.value = l.value === "months" ? "month" : "months";
    }
    function E() {
      l.value = l.value === "year" ? "month" : "year";
    }
    function w(O) {
      l.value === "months" && P(), n("update:month", O);
    }
    function $(O) {
      l.value === "year" && E(), n("update:year", O);
    }
    return J(i, (O, F) => {
      const L = Ie(F), b = Ie(O);
      if (!b.length) return;
      const C = r.date(L[L.length - 1]), R = r.date(b[b.length - 1]), U = r.getMonth(R), j = r.getYear(R);
      U !== c.value && (c.value = U, w(c.value)), j !== d.value && (d.value = j, $(d.value)), y.value = r.isBefore(C, R);
    }), z(() => {
      const O = Oi.filterProps(e), F = Pi.filterProps(e), L = xi.filterProps(e), b = Mi.filterProps(e), C = bt(Ti.filterProps(e), ["modelValue"]), R = bt(Di.filterProps(e), ["modelValue"]), U = {
        header: m.value,
        transition: g.value
      };
      return o(Oi, K(O, {
        class: ["v-date-picker", `v-date-picker--${l.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => a.title?.() ?? o("div", {
          class: "v-date-picker__title"
        }, [s(e.title)]),
        header: () => a.header ? o(Pe, {
          defaults: {
            VDatePickerHeader: {
              ...U
            }
          }
        }, {
          default: () => [a.header?.(U)]
        }) : o(xi, K({
          key: "header"
        }, L, U, {
          onClick: l.value !== "month" ? k : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => o(Ae, null, [o(Pi, K(F, {
          disabled: _.value,
          text: v.value,
          "onClick:next": x,
          "onClick:prev": D,
          "onClick:month": P,
          "onClick:year": E
        }), null), o(ld, {
          hideOnLeave: !0
        }, {
          default: () => [l.value === "months" ? o(Ti, K({
            key: "date-picker-months"
          }, C, {
            modelValue: c.value,
            "onUpdate:modelValue": [(j) => c.value = j, w],
            min: h.value,
            max: S.value,
            year: d.value
          }), null) : l.value === "year" ? o(Di, K({
            key: "date-picker-years"
          }, R, {
            modelValue: d.value,
            "onUpdate:modelValue": [(j) => d.value = j, $],
            min: h.value,
            max: S.value
          }), null) : o(Mi, K({
            key: "date-picker-month"
          }, b, {
            modelValue: i.value,
            "onUpdate:modelValue": (j) => i.value = j,
            month: c.value,
            "onUpdate:month": [(j) => c.value = j, w],
            year: d.value,
            "onUpdate:year": [(j) => d.value = j, $],
            min: h.value,
            max: S.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), oy = A({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ee(),
  ...La({
    transition: {
      component: Ol
    }
  })
}, "VCounter"), uy = B()({
  name: "VCounter",
  functional: !0,
  props: oy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return z(() => o(it, {
      transition: e.transition
    }, {
      default: () => [tt(o("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Fn, e.active]])]
    })), {};
  }
}), cy = A({
  floating: Boolean,
  ...ee()
}, "VFieldLabel"), Qn = B()({
  name: "VFieldLabel",
  props: cy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return z(() => o(Ho, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), dy = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], nu = A({
  appendInnerIcon: ye,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ye,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ye,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => dy.includes(e)
  },
  "onClick:clear": Fe(),
  "onClick:appendInner": Fe(),
  "onClick:prependInner": Fe(),
  ...ee(),
  ...jr(),
  ...dt(),
  ...Ee()
}, "VField"), au = B()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Zo(),
    ...nu()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      themeClasses: s
    } = Re(e), {
      loaderClasses: i
    } = zr(e), {
      focusClasses: l,
      isFocused: u,
      focus: c,
      blur: d
    } = Ts(e), {
      InputIcon: y
    } = qo(e), {
      roundedClasses: m
    } = ft(e), {
      rtlClasses: v
    } = vn(), g = f(() => e.dirty || e.active), h = f(() => !e.singleLine && !!(e.label || r.label)), S = ct(), _ = f(() => e.id || `input-${S}`), x = f(() => `${_.value}-messages`), D = H(), k = H(), P = H(), E = f(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: w,
      backgroundColorStyles: $
    } = et(W(e, "bgColor")), {
      textColorClasses: O,
      textColorStyles: F
    } = kt(f(() => e.error || e.disabled ? void 0 : g.value && u.value ? e.color : e.baseColor));
    J(g, (R) => {
      if (h.value) {
        const U = D.value.$el, j = k.value.$el;
        requestAnimationFrame(() => {
          const ce = $r(U), te = j.getBoundingClientRect(), pe = te.x - ce.x, ne = te.y - ce.y - (ce.height / 2 - te.height / 2), we = te.width / 0.75, Ye = Math.abs(we - ce.width) > 1 ? {
            maxWidth: q(we)
          } : void 0, Le = getComputedStyle(U), Je = getComputedStyle(j), Tt = parseFloat(Le.transitionDuration) * 1e3 || 150, oe = parseFloat(Je.getPropertyValue("--v-field-label-scale")), yn = Je.getPropertyValue("color");
          U.style.visibility = "visible", j.style.visibility = "hidden", qt(U, {
            transform: `translate(${pe}px, ${ne}px) scale(${oe})`,
            color: yn,
            ...Ye
          }, {
            duration: Tt,
            easing: va,
            direction: R ? "normal" : "reverse"
          }).finished.then(() => {
            U.style.removeProperty("visibility"), j.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const L = f(() => ({
      isActive: g,
      isFocused: u,
      controlRef: P,
      blur: d,
      focus: c
    }));
    function b(R) {
      R.target !== document.activeElement && R.preventDefault();
    }
    function C(R) {
      R.key !== "Enter" && R.key !== " " || (R.preventDefault(), R.stopPropagation(), e["onClick:clear"]?.(new MouseEvent("click")));
    }
    return z(() => {
      const R = e.variant === "outlined", U = !!(r["prepend-inner"] || e.prependInnerIcon), j = !!(e.clearable || r.clear), ce = !!(r["append-inner"] || e.appendInnerIcon || j), te = () => r.label ? r.label({
        ...L.value,
        label: e.label,
        props: {
          for: _.value
        }
      }) : e.label;
      return o("div", K({
        class: ["v-field", {
          "v-field--active": g.value,
          "v-field--appended": ce,
          "v-field--center-affix": e.centerAffix ?? !E.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": U,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !te(),
          [`v-field--variant-${e.variant}`]: !0
        }, s.value, w.value, l.value, i.value, m.value, v.value, e.class],
        style: [$.value, e.style],
        onClick: b
      }, n), [o("div", {
        class: "v-field__overlay"
      }, null), o(ol, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: r.loader
      }), U && o("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && o(y, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), r["prepend-inner"]?.(L.value)]), o("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && o(Qn, {
        key: "floating-label",
        ref: k,
        class: [O.value],
        floating: !0,
        for: _.value,
        style: F.value
      }, {
        default: () => [te()]
      }), o(Qn, {
        ref: D,
        for: _.value
      }, {
        default: () => [te()]
      }), r.default?.({
        ...L.value,
        props: {
          id: _.value,
          class: "v-field__input",
          "aria-describedby": x.value
        },
        focus: c,
        blur: d
      })]), j && o(ud, {
        key: "clear"
      }, {
        default: () => [tt(o("div", {
          class: "v-field__clearable",
          onMousedown: (pe) => {
            pe.preventDefault(), pe.stopPropagation();
          }
        }, [o(Pe, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [r.clear ? r.clear({
            ...L.value,
            props: {
              onKeydown: C,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : o(y, {
            name: "clear",
            onKeydown: C,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[Fn, e.dirty]])]
      }), ce && o("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [r["append-inner"]?.(L.value), e.appendInnerIcon && o(y, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), o("div", {
        class: ["v-field__outline", O.value],
        style: F.value
      }, [R && o(Ae, null, [o("div", {
        class: "v-field__outline__start"
      }, null), h.value && o("div", {
        class: "v-field__outline__notch"
      }, [o(Qn, {
        ref: k,
        floating: !0,
        for: _.value
      }, {
        default: () => [te()]
      })]), o("div", {
        class: "v-field__outline__end"
      }, null)]), E.value && h.value && o(Qn, {
        ref: k,
        floating: !0,
        for: _.value
      }, {
        default: () => [te()]
      })])]);
    }), {
      controlRef: P
    };
  }
});
function fy(e) {
  const t = Object.keys(au.props).filter((n) => !Lr(n) && n !== "class" && n !== "style");
  return zi(e, t);
}
const vy = ["color", "file", "time", "date", "datetime-local", "week", "month"], my = A({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ds(),
  ...nu()
}, "VTextField"), Ge = B()({
  name: "VTextField",
  directives: {
    Intersect: Bl
  },
  inheritAttrs: !1,
  props: my(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const s = _e(e, "modelValue"), {
      isFocused: i,
      focus: l,
      blur: u
    } = Ts(e), c = f(() => typeof e.counterValue == "function" ? e.counterValue(s.value) : typeof e.counterValue == "number" ? e.counterValue : (s.value ?? "").toString().length), d = f(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), y = f(() => ["plain", "underlined"].includes(e.variant));
    function m(E, w) {
      !e.autofocus || !E || w[0].target?.focus?.();
    }
    const v = H(), g = H(), h = H(), S = f(() => vy.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
    function _() {
      h.value !== document.activeElement && h.value?.focus(), i.value || l();
    }
    function x(E) {
      a("mousedown:control", E), E.target !== h.value && (_(), E.preventDefault());
    }
    function D(E) {
      _(), a("click:control", E);
    }
    function k(E) {
      E.stopPropagation(), _(), Be(() => {
        s.value = null, Bu(e["onClick:clear"], E);
      });
    }
    function P(E) {
      const w = E.target;
      if (s.value = w.value, e.modelModifiers?.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const $ = [w.selectionStart, w.selectionEnd];
        Be(() => {
          w.selectionStart = $[0], w.selectionEnd = $[1];
        });
      }
    }
    return z(() => {
      const E = !!(r.counter || e.counter !== !1 && e.counter != null), w = !!(E || r.details), [$, O] = Nr(n), {
        modelValue: F,
        ...L
      } = wa.filterProps(e), b = fy(e);
      return o(wa, K({
        ref: v,
        modelValue: s.value,
        "onUpdate:modelValue": (C) => s.value = C,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": y.value
        }, e.class],
        style: e.style
      }, $, L, {
        centerAffix: !y.value,
        focused: i.value
      }), {
        ...r,
        default: (C) => {
          let {
            id: R,
            isDisabled: U,
            isDirty: j,
            isReadonly: ce,
            isValid: te
          } = C;
          return o(au, K({
            ref: g,
            onMousedown: x,
            onClick: D,
            "onClick:clear": k,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, b, {
            id: R.value,
            active: S.value || j.value,
            dirty: j.value || e.dirty,
            disabled: U.value,
            focused: i.value,
            error: te.value === !1
          }), {
            ...r,
            default: (pe) => {
              let {
                props: {
                  class: ne,
                  ...we
                }
              } = pe;
              const Ye = tt(o("input", K({
                ref: h,
                value: s.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: ce.value,
                disabled: U.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: _,
                onBlur: u
              }, we, O), null), [[ln("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return o(Ae, null, [e.prefix && o("span", {
                class: "v-text-field__prefix"
              }, [o("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), r.default ? o("div", {
                class: ne,
                "data-no-activator": ""
              }, [r.default(), Ye]) : fu(Ye, {
                class: ne
              }), e.suffix && o("span", {
                class: "v-text-field__suffix"
              }, [o("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: w ? (C) => o(Ae, null, [r.details?.(C), E && o(Ae, null, [o("span", null, null), o(uy, {
          active: e.persistentCounter || i.value,
          value: c.value,
          max: d.value,
          disabled: e.disabled
        }, r.counter)])]) : void 0
      });
    }), as({}, v, g, h);
  }
}), hy = { class: "date-picker-desktop elevation-4 mx-auto" }, gy = {
  __name: "DatePickerDesktop",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), s = f(() => a.getConfig), i = f(() => a.getMaxDate), l = f(() => p(a.getMaxDate).format(Y.DATE_FORMAT)), u = f(() => a.getMaxLeftDate), c = f(() => a.isPickerPrimaryActive), d = f(() => a.getPickerPrimary), y = f(() => a.getDateStart), m = f(() => a.getDateUntil), v = f(() => a.getCompareState), g = f(() => a.getPickerCompare), h = f(() => a.getDateCompareStart), S = f(() => a.getDateCompareUntil), _ = f(() => a.getPickerPrimaryLeft), x = f(() => a.getPickerPrimaryRight), D = f(() => a.getPickerPrimaryLeftYear), k = f(() => a.getPickerPrimaryRightYear), P = f(() => new Date(p(a.picker_active_mount).subtract(1, "month").format(Y.MONTH_FORMAT)).getMonth()), E = f(() => new Date(p(a.picker_active_mount).format(Y.MONTH_FORMAT)).getMonth()), w = t, $ = () => {
      a.SET_CONFIG(), w("change", s.value);
    }, O = H(0), F = H(0);
    return J(
      [_, x, d],
      () => {
        O.value += 1, F.value += 1;
      }
    ), (L, b) => (Z(), je("div", hy, [
      o(Za, { class: "pickers" }, {
        default: T(() => [
          o(de, null, {
            default: T(() => [
              o(ue, { cols: "7" }, {
                default: T(() => [
                  o(de, {
                    class: sa(["picker-main", c.value ? "active" : ""])
                  }, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          (Z(), he(Xt, {
                            key: O.value,
                            class: "my-5 left-date-picker",
                            multiple: "range",
                            "next-icon": "false",
                            color: "primary",
                            locale: "en",
                            max: u.value,
                            "first-day-of-week": "1",
                            "model-value": d.value,
                            "display-value": P.value,
                            month: P.value,
                            year: D.value,
                            "onUpdate:month": b[0] || (b[0] = (C) => V(a).SET_PICKER_DATE_LEFT(C)),
                            "onUpdate:modelValue": b[1] || (b[1] = (C) => V(a).SET_PICKER_PRIMARY(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          (Z(), he(Xt, {
                            key: F.value,
                            class: "my-5 right-date-picker",
                            multiple: "range",
                            "prev-icon": "false",
                            color: "primary",
                            locale: "en",
                            max: i.value,
                            "first-day-of-week": "1",
                            "model-value": d.value,
                            "display-value": d.value,
                            month: E.value,
                            year: k.value,
                            "onUpdate:month": b[2] || (b[2] = (C) => V(a).SET_PICKER_DATE(C)),
                            "onUpdate:modelValue": b[3] || (b[3] = (C) => V(a).SET_PICKER_PRIMARY(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  v.value ? (Z(), he(de, {
                    key: 0,
                    justify: "center",
                    class: "picker-compare"
                  }, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          (Z(), he(Xt, {
                            key: O.value,
                            class: "my-5 left-date-picker picker-compare-selected",
                            multiple: "range",
                            "next-icon": "false",
                            color: "orange-darken-2",
                            locale: "en",
                            max: u.value,
                            "first-day-of-week": "1",
                            "model-value": g.value,
                            "display-value": P.value,
                            month: P.value,
                            year: D.value,
                            "onUpdate:month": b[4] || (b[4] = (C) => V(a).SET_PICKER_DATE_LEFT(C)),
                            "onUpdate:modelValue": b[5] || (b[5] = (C) => V(a).SET_PICKER_COMPARE(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          (Z(), he(Xt, {
                            key: F.value,
                            class: "my-5 right-date-picker picker-compare-selected",
                            multiple: "range",
                            "prev-icon": "false",
                            color: "orange-darken-2",
                            locale: "en",
                            max: i.value,
                            "first-day-of-week": "1",
                            "model-value": g.value,
                            "display-value": E.value,
                            month: E.value,
                            year: k.value,
                            "onUpdate:month": b[6] || (b[6] = (C) => V(a).SET_PICKER_DATE(C)),
                            "onUpdate:modelValue": b[7] || (b[7] = (C) => V(a).SET_PICKER_COMPARE(C))
                          }, null, 8, ["max", "model-value", "display-value", "month", "year"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              }),
              o(ue, { cols: "5" }, {
                default: T(() => [
                  o(de, null, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            "model-value": y.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[8] || (b[8] = (C) => V(a).SET_DATE_START(C)),
                            onClick: b[9] || (b[9] = (C) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "model-value"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            "model-value": m.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[10] || (b[10] = (C) => V(a).SET_DATE_UNTIL(C)),
                            onClick: b[11] || (b[11] = (C) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(de, { class: "pl-2 pr-1" }, {
                    default: T(() => [
                      o(xs, {
                        "pinia-store": V(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  }),
                  r.value ? (Z(), he(de, {
                    key: 0,
                    class: "pl-2 pt-6"
                  }, {
                    default: T(() => [
                      o(Os, {
                        modelValue: v.value,
                        "onUpdate:modelValue": [
                          b[12] || (b[12] = (C) => v.value = C),
                          b[13] || (b[13] = (C) => V(a).FLIP_COMPARE_STATE())
                        ],
                        label: "Compare to the following",
                        class: "compare-label",
                        "hide-details": ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, { key: 1 }, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: h.value,
                            disabled: !v.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[14] || (b[14] = (C) => V(a).SET_COMPARE_START(C)),
                            onClick: b[15] || (b[15] = (C) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: S.value,
                            disabled: !v.value,
                            class: "picker-input",
                            "onUpdate:modelValue": b[16] || (b[16] = (C) => V(a).SET_COMPARE_UNTIL(C)),
                            onClick: b[17] || (b[17] = (C) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, {
                    key: 2,
                    class: "pl-2"
                  }, {
                    default: T(() => [
                      o(Ms, {
                        "pinia-store": V(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      o(qa, { class: "mt-2" }, {
        default: T(() => [
          o(Ya),
          o(le, {
            variant: "outlined",
            class: "px-4 mr-6",
            onClick: b[18] || (b[18] = (C) => V(a).SET_DIALOG_OPENED(!1))
          }, {
            default: T(() => [
              be("Cancel")
            ]),
            _: 1
          }),
          o(le, {
            class: "px-7",
            variant: "elevated",
            color: "primary",
            onClick: b[19] || (b[19] = vu((C) => $(), ["stop"]))
          }, {
            default: T(() => [
              be("Apply")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}, yy = /* @__PURE__ */ $n(gy, [["__scopeId", "data-v-13334baf"]]), _y = { class: "date-picker-tablet elevation-4 mx-auto" }, Sy = {
  __name: "DatePickerTablet",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), s = f(() => a.getConfig), i = f(() => a.getMaxDate), l = f(() => p(a.getMaxDate).format(Y.DATE_FORMAT)), u = f(() => a.isPickerPrimaryActive), c = f(() => a.getPickerPrimary), d = f(() => a.getPickerDate), y = f(() => a.getDateStart), m = f(() => a.getDateUntil), v = f(() => a.getCompareState), g = f(() => a.getPickerCompare), h = f(() => a.getDateCompareStart), S = f(() => a.getDateCompareUntil), _ = t, x = () => {
      a.SET_CONFIG(), _("change", s.value);
    };
    return (D, k) => (Z(), je("div", _y, [
      o(Za, { class: "pickers" }, {
        default: T(() => [
          o(de, null, {
            default: T(() => [
              o(ue, { cols: "6" }, {
                default: T(() => [
                  o(de, {
                    justify: "center",
                    class: sa(["picker-main", u.value ? "active" : ""])
                  }, {
                    default: T(() => [
                      o(ue, { cols: "12" }, {
                        default: T(() => [
                          o(Xt, {
                            multiple: "range",
                            "no-title": "",
                            "first-day-of-week": "1",
                            "v-model:month": new Date(d.value).getMonth(),
                            "v-model:year": new Date(d.value).getFullYear(),
                            max: i.value,
                            "model-value": c.value,
                            class: "picker-compare-left pr-1",
                            color: "primary darken-2 picker-main-selected",
                            "onUpdate:modelValue": k[0] || (k[0] = (P) => V(a).SET_PICKER_PRIMARY(P)),
                            "onUpdate:pickerDate": k[1] || (k[1] = (P) => V(a).SET_PICKER_DATE(P))
                          }, null, 8, ["v-model:month", "v-model:year", "max", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  v.value ? (Z(), he(de, {
                    key: 0,
                    justify: "center",
                    class: "picker-compare"
                  }, {
                    default: T(() => [
                      o(ue, { cols: "12" }, {
                        default: T(() => [
                          o(Xt, {
                            multiple: "range",
                            "no-title": "",
                            "first-day-of-week": "1",
                            class: "picker-main-right",
                            color: "orange-darken-2",
                            max: i.value,
                            "v-model:month": new Date(d.value).getMonth(),
                            "v-model:year": new Date(d.value).getFullYear(),
                            "model-value": g.value,
                            "onUpdate:modelValue": k[2] || (k[2] = (P) => V(a).SET_PICKER_COMPARE(P)),
                            "onUpdate:pickerDate": k[3] || (k[3] = (P) => V(a).SET_PICKER_DATE(P))
                          }, null, 8, ["max", "v-model:month", "v-model:year", "model-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              }),
              o(ue, { cols: "6" }, {
                default: T(() => [
                  o(de, null, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            value: y.value,
                            class: "picker-input",
                            "onUpdate:modelValue": k[4] || (k[4] = (P) => V(a).SET_DATE_START(P)),
                            onClick: k[5] || (k[5] = (P) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "value"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            dense: "",
                            variant: "outlined",
                            max: l.value,
                            value: m.value,
                            class: "picker-input",
                            "onUpdate:modelValue": k[6] || (k[6] = (P) => V(a).SET_DATE_UNTIL(P)),
                            onClick: k[7] || (k[7] = (P) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                          }, null, 8, ["max", "value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(de, { class: "pl-2 pr-1" }, {
                    default: T(() => [
                      o(xs, {
                        "pinia-store": V(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  }),
                  r.value ? (Z(), he(de, {
                    key: 0,
                    class: "pl-2 pt-6"
                  }, {
                    default: T(() => [
                      o(Os, {
                        modelValue: v.value,
                        "onUpdate:modelValue": k[8] || (k[8] = (P) => v.value = P),
                        label: "Compare to the following",
                        class: "compare-label",
                        "hide-details": "",
                        onChange: k[9] || (k[9] = (P) => V(a).FLIP_COMPARE_STATE())
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, { key: 1 }, {
                    default: T(() => [
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "From",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: h.value,
                            disabled: !v.value,
                            class: "picker-input",
                            onInput: k[10] || (k[10] = (P) => V(a).SET_COMPARE_START(P)),
                            onClick: k[11] || (k[11] = (P) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      }),
                      o(ue, { cols: "6" }, {
                        default: T(() => [
                          o(Ge, {
                            "hide-details": "",
                            label: "To",
                            type: "date",
                            variant: "outlined",
                            dense: "",
                            max: l.value,
                            value: S.value,
                            disabled: !v.value,
                            class: "picker-input",
                            onInput: k[12] || (k[12] = (P) => V(a).SET_COMPARE_UNTIL(P)),
                            onClick: k[13] || (k[13] = (P) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                          }, null, 8, ["max", "value", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : De("", !0),
                  r.value ? (Z(), he(de, {
                    key: 2,
                    class: "pl-2"
                  }, {
                    default: T(() => [
                      o(Ms, {
                        "pinia-store": V(a),
                        namespace: e.namespace
                      }, null, 8, ["pinia-store", "namespace"])
                    ]),
                    _: 1
                  })) : De("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      o(qa, { class: "mt-2" }, {
        default: T(() => [
          o(Ya),
          o(le, {
            variant: "outlined",
            class: "px-4 mr-6",
            onClick: k[14] || (k[14] = (P) => V(a).SET_DIALOG_OPENED(!1))
          }, {
            default: T(() => [
              be("Cancel")
            ]),
            _: 1
          }),
          o(le, {
            class: "px-7",
            variant: "elevated",
            color: "primary",
            onClick: k[15] || (k[15] = (P) => x())
          }, {
            default: T(() => [
              be("Apply")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}, py = /* @__PURE__ */ $n(Sy, [["__scopeId", "data-v-9af8a2b4"]]), by = A({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ns({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Dl
    },
    zIndex: 2400
  })
}, "VDialog"), ky = B()({
  name: "VDialog",
  props: by(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = _e(e, "modelValue"), {
      scopeId: s
    } = ts(), i = H();
    function l(d) {
      const y = d.relatedTarget, m = d.target;
      if (y !== m && i.value?.contentEl && // We're the topmost dialog
      i.value?.globalTop && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(m) && // It isn't inside the dialog body
      !i.value.contentEl.contains(m)) {
        const v = ua(i.value.contentEl);
        if (!v.length) return;
        const g = v[0], h = v[v.length - 1];
        y === g ? h.focus() : g.focus();
      }
    }
    We && J(() => r.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", l) : document.removeEventListener("focusin", l);
    }, {
      immediate: !0
    });
    function u() {
      i.value?.contentEl && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      n("afterLeave");
    }
    return J(r, async (d) => {
      d || (await Be(), i.value.activatorEl?.focus({
        preventScroll: !0
      }));
    }), z(() => {
      const d = An.filterProps(e), y = K({
        "aria-haspopup": "dialog",
        "aria-expanded": String(r.value)
      }, e.activatorProps), m = K({
        tabindex: -1
      }, e.contentProps);
      return o(An, K({
        ref: i,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: r.value,
        "onUpdate:modelValue": (v) => r.value = v,
        "aria-modal": "true",
        activatorProps: y,
        contentProps: m,
        role: "dialog",
        onAfterEnter: u,
        onAfterLeave: c
      }, s), {
        activator: a.activator,
        default: function() {
          for (var v = arguments.length, g = new Array(v), h = 0; h < v; h++)
            g[h] = arguments[h];
          return o(Pe, {
            root: "VDialog"
          }, {
            default: () => [a.default?.(...g)]
          });
        }
      });
    }), as({}, i);
  }
}), wy = {
  __name: "DatePickerMobile",
  props: {
    namespace: {
      type: String,
      default: "datepicker"
    },
    piniaStore: {
      required: !0
    }
  },
  emits: ["emitConfig"],
  setup(e, { emit: t }) {
    const a = e.piniaStore, r = f(() => a.show_compare_date_range), s = f(() => a.getConfig), i = f(() => p(a.getMaxDate).format(Y.DATE_FORMAT)), l = f(() => a.getCompareState), u = f(() => a.getDateCompareStart), c = f(() => a.getDateCompareUntil), d = f(() => a.getDateStart), y = f(() => a.getDateUntil), m = t, v = () => {
      a.SET_CONFIG(), m("change", s.value);
    }, g = H(!0);
    return (h, S) => (Z(), he(ky, {
      modelValue: g.value,
      "onUpdate:modelValue": S[12] || (S[12] = (_) => g.value = _),
      fullscreen: "",
      "hide-overlay": "",
      transition: "dialog-bottom-transition"
    }, {
      default: T(() => [
        o(Ug, { class: "date-picker-mobile elevation-0 d-flex flex-column" }, {
          default: T(() => [
            o(Gc, null, {
              default: T(() => [
                o(Za, null, {
                  default: T(() => [
                    o(de, null, {
                      default: T(() => [
                        o(ue, { cols: "12" }, {
                          default: T(() => [
                            o(de, null, {
                              default: T(() => [
                                o(ue, { cols: "12" }, {
                                  default: T(() => [
                                    o(Ge, {
                                      "hide-details": "",
                                      label: "From",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: i.value,
                                      value: d.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": S[0] || (S[0] = (_) => V(a).SET_DATE_START(_)),
                                      onClick: S[1] || (S[1] = (_) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                                    }, null, 8, ["max", "value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            o(de, null, {
                              default: T(() => [
                                o(ue, { cols: "12" }, {
                                  default: T(() => [
                                    o(Ge, {
                                      "hide-details": "",
                                      label: "To",
                                      type: "date",
                                      dense: "",
                                      variant: "outlined",
                                      max: i.value,
                                      value: y.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": S[2] || (S[2] = (_) => V(a).SET_DATE_UNTIL(_)),
                                      onClick: S[3] || (S[3] = (_) => V(a).SET_PICKER_PRIMARY_ACTIVE(!0))
                                    }, null, 8, ["max", "value"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            o(de, {
                              justify: "start",
                              class: "pl-2 pr-1"
                            }, {
                              default: T(() => [
                                o(xs, {
                                  "pinia-store": V(a),
                                  namespace: e.namespace
                                }, null, 8, ["pinia-store", "namespace"])
                              ]),
                              _: 1
                            }),
                            r.value ? (Z(), he(de, {
                              key: 0,
                              class: "pl-2 pt-0"
                            }, {
                              default: T(() => [
                                o(Os, {
                                  modelValue: l.value,
                                  "onUpdate:modelValue": S[4] || (S[4] = (_) => l.value = _),
                                  label: "Compare to the following",
                                  class: "compare-label",
                                  onChange: S[5] || (S[5] = (_) => V(a).FLIP_COMPARE_STATE())
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, { key: 1 }, {
                              default: T(() => [
                                o(ue, { cols: "12" }, {
                                  default: T(() => [
                                    o(Ge, {
                                      "hide-details": "",
                                      label: "From",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: i.value,
                                      value: u.value,
                                      disabled: !l.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": S[6] || (S[6] = (_) => V(a).SET_COMPARE_START(_)),
                                      onClick: S[7] || (S[7] = (_) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                                    }, null, 8, ["max", "value", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, { key: 2 }, {
                              default: T(() => [
                                o(ue, { cols: "12" }, {
                                  default: T(() => [
                                    o(Ge, {
                                      "hide-details": "",
                                      label: "To",
                                      type: "date",
                                      variant: "outlined",
                                      dense: "",
                                      max: i.value,
                                      value: c.value,
                                      disabled: !l.value,
                                      class: "picker-input",
                                      "onUpdate:modelValue": S[8] || (S[8] = (_) => V(a).SET_COMPARE_UNTIL(_)),
                                      onClick: S[9] || (S[9] = (_) => V(a).SET_PICKER_PRIMARY_ACTIVE(!1))
                                    }, null, 8, ["max", "value", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : De("", !0),
                            r.value ? (Z(), he(de, {
                              key: 3,
                              justify: "start",
                              class: "pl-2"
                            }, {
                              default: T(() => [
                                o(Ms, {
                                  "pinia-store": V(a),
                                  namespace: e.namespace
                                }, null, 8, ["pinia-store", "namespace"])
                              ]),
                              _: 1
                            })) : De("", !0)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                o(qa, { class: "mt-2" }, {
                  default: T(() => [
                    o(Ya),
                    o(le, {
                      variant: "outlined",
                      class: "px-4 mr-3",
                      onClick: S[10] || (S[10] = (_) => V(a).SET_DIALOG_OPENED(!1))
                    }, {
                      default: T(() => [
                        be("Cancel")
                      ]),
                      _: 1
                    }),
                    o(le, {
                      class: "px-7",
                      variant: "elevated",
                      color: "primary",
                      onClick: S[11] || (S[11] = (_) => v())
                    }, {
                      default: T(() => [
                        be("Apply")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}, Cy = /* @__PURE__ */ $n(wy, [["__scopeId", "data-v-e9a33dc2"]]), Ei = "MMM D, YYYY", Dt = "LAST_7_DAYS", Ai = "PREVIOUS_PERIOD", Vi = {
  state: () => ({
    debug: !1,
    // date range picker config props and emitted values
    config: {
      compare: !0
    },
    // layout
    show_calendar_icon: !0,
    show_presets_icon: !0,
    show_compare_date_range: !0,
    // config
    compare: !0,
    dark_theme: !1,
    date_format: Ei,
    // defaults
    default_date_format: Ei,
    default_primary_preset: Dt,
    default_compare_preset: Ai,
    // primary date range
    date_start: Y[Dt][0],
    date_until: Y[Dt][1],
    picker_active_mount: Y[Dt][0],
    picker_active_compare_mount: Y[Dt][0],
    // compare period date range
    compare_start: Y.PREVIOUS_PERIOD(Y[Dt])[0],
    compare_until: Y.PREVIOUS_PERIOD(Y[Dt])[1],
    // primary and compare presets
    primary_preset: Dt,
    compare_preset: Ai,
    // primary and compare presets lists
    primary_presets: Object.keys(Dr),
    compare_presets: Object.keys(Or),
    // layout
    dialog_opened: !1,
    picker_primary_active: !0
  }),
  getters: {
    // dialog window state
    isDialogOpened(e) {
      return e.dialog_opened;
    },
    isCalendarIconShown(e) {
      return e.show_calendar_icon;
    },
    isPresetsIconShown(e) {
      return e.show_presets_icon;
    },
    getPresetLabel() {
      return (e) => e.replaceAll("_", " ");
    },
    getPresetLabelSmall() {
      return (e) => e.replaceAll("_", " ").toLowerCase();
    },
    // compare checkbox state
    getCompareState(e) {
      return e.compare;
    },
    // primary date picker state
    getDateStart(e) {
      return e.date_start;
    },
    getDateUntil(e) {
      return e.date_until;
    },
    getPickerPrimary(e) {
      return Y.getDatesBetween(e.date_start, e.date_until);
    },
    // compare date picker state
    getDateCompareStart(e) {
      return e.compare_start;
    },
    getDateCompareUntil(e) {
      return e.compare_until;
    },
    getPickerCompare(e) {
      return Y.getDatesBetween(e.compare_start, e.compare_until);
    },
    // vuetify date pickers state
    isPickerPrimaryActive(e) {
      return e.picker_primary_active;
    },
    // parameter getter to format date
    getFormattedDate() {
      return (e, t) => {
        const n = p(e).month(), a = p(e).year(), r = p(t).month(), s = p(t).year();
        let i = "MMM D, YYYY", l = "MMM D, YYYY";
        return a === s && n === r ? (i = "MMM D", l = "D, YYYY") : a === s && (i = "MMM D", l = "MMM D, YYYY"), p(e).format(i) + " - " + p(t).format(l);
      };
    },
    getPickerDate(e) {
      return p(e.picker_active_mount).format(Y.MONTH_FORMAT);
    },
    getPickerPrimaryLeft(e) {
      return p(e.picker_active_mount).subtract(1, "month").format(Y.MONTH_FORMAT);
    },
    getPickerPrimaryRight(e) {
      return p(e.picker_active_mount).format(Y.MONTH_FORMAT);
    },
    getPickerPrimaryLeftMonth(e) {
      return new Date(
        p(e.picker_active_mount).subtract(1, "month").format(Y.MONTH_FORMAT)
      ).getMonth();
    },
    getPickerPrimaryRightMonth(e) {
      return new Date(p(e.picker_active_mount).format(Y.MONTH_FORMAT)).getMonth();
    },
    getPickerPrimaryLeftYear() {
      return new Date(this.getPickerPrimaryLeft).getFullYear();
    },
    getPickerPrimaryRightYear() {
      return new Date(this.getPickerPrimaryRight).getFullYear();
    },
    getConfig(e) {
      return e.config;
    },
    // input field helpers
    getMaxDate() {
      return new Date(Y.TODAY);
    },
    getMaxLeftDate() {
      return Y.getLastDayOfMonth(
        new Date(this.getPickerPrimaryLeftYear, this.getPickerPrimaryLeftMonth)
      );
    },
    // preset default
    getPrimaryPreset(e) {
      return e.primary_preset;
    },
    getComparePreset(e) {
      return e.compare_preset;
    },
    // get presets
    getPrimaryPresets(e) {
      return e.primary_presets;
    },
    getComparePresets(e) {
      return e.compare_presets;
    }
  },
  actions: {
    // controls the dialog
    SET_DEBUG(e) {
      this.debug = e;
    },
    // controls the dialog
    SET_DIALOG_OPENED(e) {
      this.dialog_opened = e;
    },
    // controls the dialog
    SET_PRESET_ICON_SHOWN(e) {
      this.show_presets_icon = e;
    },
    // controls the dialog
    SET_CALENDAR_ICON_SHOWN(e) {
      this.show_calendar_icon = e;
    },
    // controls the compare date range visibility
    SET_COMPARE_DATE_RANGE_SHOWN(e) {
      this.show_compare_date_range = e;
    },
    // flips compare period checkbox
    FLIP_COMPARE_STATE() {
      this.compare = !this.compare;
    },
    // flips compare period checkbox
    SET_COMPARE_STATE(e) {
      this.compare = e;
    },
    // set primary picker active
    SET_PICKER_PRIMARY_ACTIVE(e) {
      this.picker_primary_active = e;
    },
    // control date range properties
    SET_DATE_START(e) {
      this.date_start = p(e).format(Y.DATE_FORMAT), this.compare_start = Y[this.compare_preset]([this.date_start, this.date_until])[0], this.primary_preset = null;
    },
    SET_DATE_UNTIL(e) {
      this.date_until = p(e).format(Y.DATE_FORMAT), this.compare_until = Y[this.compare_preset]([this.date_start, this.date_until])[1], this.primary_preset = null;
    },
    SET_COMPARE_START(e) {
      this.compare_start = p(e).format(Y.DATE_FORMAT), this.compare_preset = null;
    },
    SET_COMPARE_UNTIL(e) {
      this.compare_until = p(e).format(Y.DATE_FORMAT), this.compare_preset = null;
    },
    // control selected primary preset
    SET_PRIMARY_PRESET(e) {
      if (this.primary_preset = e, this.picker_active_mount = p(Y[e][0]).add(1, "month").format(Y.MONTH_FORMAT), this.piker_left = Y[e][0], this.date_start = Y[e][0], this.date_until = Y[e][1], this.compare_preset) {
        const t = Y[this.compare_preset]([this.date_start, this.date_until]);
        this.compare_start = t[0], this.compare_until = t[1];
      }
      this.picker_primary_active = !0;
    },
    // control selected compare preset
    SET_COMPARE_PRESET(e) {
      const t = Y[e]([this.date_start, this.date_until]);
      this.compare_preset = e, this.compare_start = t[0], this.compare_until = t[1], this.picker_active_mount = p(t[0]).add(1, "month").format(Y.MONTH_FORMAT), this.picker_primary_active = !1;
    },
    // load initial component props to the store state
    SET_PROPS(e) {
      if (this.debug && console.log("[ SET_PROPS ]:"), this.compare = this.config.compare, e && [!0, !1].includes(e.compare) && (this.compare = e.compare), this.debug && console.log("- applying compare:", this.compare), e && Y[e.primaryPreset] ? (this.primary_preset = e.primaryPreset, this.date_start = Y[e && e.primaryPreset][0], this.date_until = Y[e && e.primaryPreset][1], this.debug && console.log("- applying primary preset from props:", Y[e.primaryPreset])) : (this.primary_preset = null, this.date_start = e && e.dateStart || Y[this.default_primary_preset][0], this.date_until = e && e.dateUntil || Y[this.default_primary_preset][1], !e.dateStart && !e.dateUntil && (this.primary_preset = this.default_primary_preset, this.debug && console.log(
        "- applying primary date range from default preset:",
        this.date_start,
        "-",
        this.date_until
      )), this.debug && (e.dateStart || e.dateUntil) && console.log(
        "- applying primary date range from props:",
        this.date_start,
        "-",
        this.date_until
      )), e && Y[e.comparePreset]) {
        const t = Y[e.comparePreset]([this.date_start, this.date_until]);
        this.compare_preset = e.comparePreset, this.compare_start = t[0], this.compare_until = t[1], this.debug && console.log("- applying compare preset:", t);
      } else
        this.compare_start = e && e.compareStart || Y[this.default_compare_preset]([this.date_start, this.date_until])[0], this.compare_until = e && e.compareUntil || Y[this.default_compare_preset]([this.date_start, this.date_until])[1], !e.compareStart && !e.compareUntil && (this.compare_preset = this.default_compare_preset, this.debug && console.log(
          "- applying compare date range from default preset:",
          this.compare_start,
          "-",
          this.compare_until
        )), this.debug && (e.compareStart || e.compare_until) && console.log(
          "- applying compare date range from props:",
          this.compare_start,
          "-",
          this.compare_until
        );
    },
    // set emitted config from current states
    SET_CONFIG() {
      Object.keys(Dr).forEach((e) => {
        const [t, n] = Y[e];
        t === this.date_start && n === this.date_until && (this.primary_preset = e);
      }), Object.keys(Or).forEach((e) => {
        const [t, n] = Y[e]([this.date_start, this.date_until]);
        t === this.compare_start && n === this.compare_until && (this.compare_preset = e);
      }), this.config = {
        compare: this.compare,
        dateStart: this.date_start,
        dateUntil: this.date_until,
        compareStart: this.compare_start,
        compareUntil: this.compare_until,
        primaryPreset: this.primary_preset,
        comparePreset: this.compare_preset
      }, this.debug && console.log("[ SET_CONFIG ]:", this.config), this.dialog_opened = !1;
    },
    // set primary start and until date
    SET_PICKER_PRIMARY(e) {
      this.date_start && this.date_until ? (this.date_start = p(e[0]).format(Y.DATE_FORMAT), this.date_until = void 0) : this.date_start && !this.date_until ? this.date_until = p(e[e.length - 1]).format(Y.DATE_FORMAT) : this.date_start = p(e[0]).format(Y.DATE_FORMAT), this.primary_preset = null;
    },
    // set compere start and until date
    SET_PICKER_COMPARE(e) {
      this.compare_start && this.compare_until ? (this.compare_start = p(e[0]).format(Y.DATE_FORMAT), this.compare_until = void 0) : this.compare_start && !this.compare_until ? this.compare_until = p(e[e.length - 1]).format(Y.DATE_FORMAT) : this.compare_start = p(e[0]).format(Y.DATE_FORMAT), this.compare_preset = null;
    },
    // set active mount
    SET_PICKER_DATE(e) {
      let t = new Date(this.picker_active_mount).getMonth();
      if (e === 0 && t === 11) {
        let n = new Date(this.getPickerPrimaryRight).getFullYear() + 1, a = (/* @__PURE__ */ new Date("")).setFullYear(n);
        this.picker_active_mount = p(new Date(a).setMonth(e)).format(
          Y.MONTH_FORMAT
        );
      } else
        this.picker_active_mount = p(new Date(this.getPickerPrimaryRight).setMonth(e)).format(
          Y.MONTH_FORMAT
        );
    },
    // set active mount for date piker next to each other
    SET_PICKER_DATE_LEFT(e) {
      let t = new Date(this.picker_active_mount).getMonth();
      if (t - e >= 2 && t > e)
        this.picker_active_mount = p(
          new Date(this.getPickerPrimaryLeft).setMonth(e + 1)
        ).format(Y.MONTH_FORMAT);
      else if (e === 11) {
        let n = new Date(this.getPickerPrimaryLeft).getFullYear() - 1, a = (/* @__PURE__ */ new Date("")).setFullYear(n);
        this.picker_active_mount = p(new Date(a).setMonth(e)).format(
          Y.MONTH_FORMAT
        );
      } else
        this.picker_active_mount = p(
          new Date(this.getPickerPrimaryLeft).setMonth(e + 1)
        ).format(Y.MONTH_FORMAT);
    }
  }
}, Py = { class: "date-selector" }, xy = {
  key: 0,
  class: "date-pickers-container"
}, My = {
  __name: "DateRangePicker",
  props: {
    config: {
      type: Object
    },
    namespace: {
      type: String
      // default: "datepicker",
      // required: true
    }
  },
  setup(e) {
    const t = e, { mdAndUp: n, sm: a } = mu();
    let r = {}, s = {};
    const i = H(""), l = f(() => s.isDialogOpened);
    return sn(() => {
      s.SET_PROPS({ ...t.config }), s.SET_CONFIG();
    }), Ir(() => {
      const c = "datepicker" + Math.random();
      t.namespace ? r = Es(t.namespace, Vi) : r = Es(c, Vi), s = r();
    }), (u, c) => (Z(), je("div", Py, [
      o(pf, K(u.$attrs, {
        class: i.value,
        namespace: e.namespace,
        "pinia-store": V(s),
        onChange: c[0] || (c[0] = (d) => u.$emit("change", d))
      }), null, 16, ["class", "namespace", "pinia-store"]),
      o(An, {
        modelValue: l.value,
        "onUpdate:modelValue": c[4] || (c[4] = (d) => l.value = d)
      }, {
        default: T(() => [
          l.value ? (Z(), je("div", xy, [
            V(n) ? (Z(), he(yy, {
              key: 0,
              "pinia-store": V(s),
              namespace: e.namespace,
              onChange: c[1] || (c[1] = (d) => u.$emit("change", d))
            }, null, 8, ["pinia-store", "namespace"])) : V(a) ? (Z(), he(py, {
              key: 1,
              "pinia-store": V(s),
              namespace: e.namespace,
              onChange: c[2] || (c[2] = (d) => u.$emit("change", d))
            }, null, 8, ["pinia-store", "namespace"])) : (Z(), he(Cy, {
              key: 2,
              "pinia-store": V(s),
              namespace: e.namespace,
              onChange: c[3] || (c[3] = (d) => u.$emit("change", d))
            }, null, 8, ["pinia-store", "namespace"]))
          ])) : De("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}, Ty = /* @__PURE__ */ $n(My, [["__scopeId", "data-v-f27dcf42"]]), Ay = {
  install: (e) => {
    console.log("[ DateRangePicker ]: wrapper initialization..."), e.config.globalProperties.$pinia || (console.log("[ DateRangePicker ]: pinia store not detected - creating..."), e.use(ru())), e.directive("mask", Iu), e.component("DateRangePicker", Ty), console.log("[ DateRangePicker ]: wrapper initialization completed...");
  }
};
export {
  Ty as DateRangePicker,
  Ay as default
};
