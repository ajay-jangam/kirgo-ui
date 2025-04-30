This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.
The content has been processed where empty lines have been removed, content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: assets/js, assets/sass, inc, languages, template-parts, templates, woocommerce, 404.php, archive.php, comments.php, footer.php, functions.php, header.php, index.php, page.php, sidebar.php, search.php, single.php, woocommerce.css
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Empty lines have been removed from all files
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
assets/
  js/
    app.js
  sass/
    components/
      accordion.scss
      buttons.scss
      footer.scss
      header.scss
    helpers/
      _assets.scss
      _easings.scss
      _main.scss
      _mq.scss
      _typo.scss
    pages/
      about-us.scss
      cart.scss
      checkout.scss
      get-in-touch.scss
      home.scss
      my-account.scss
      product-listing.scss
      product-single.scss
      register.scss
    _base.scss
    _helpers.scss
    _variables.scss
    app.scss
    comman-style.scss
inc/
  woocommerce/
    single-product.php
  custom-header.php
  customizer.php
  jetpack.php
  template-functions.php
  template-tags.php
  wc-template-functions.php
  woocommerce.php
languages/
  kirgo.pot
  readme.txt
template-parts/
  woocommerce/
    content-product-cards.php
    content-product-meta-bottom.php
    content-product-meta-top.php
    content-product-set.php
  content-footer.php
  content-header.php
  content-none.php
  content-page.php
  content-search.php
  content.php
  template-about-us.php
  template-blog.php
  template-cart.php
  template-checkout.php
  template-get-in-touch.php
  template-home.php
  template-my-account.php
  template-registration.php
templates/
  easy-login-woocommerce/
    xoo-el-form.php
    xoo-el-login-section.php
    xoo-el-popup.php
    xoo-el-register-section.php
woocommerce/
  emails/
    customer-processing-order.php
  loop/
    loop-end.php
  myaccount/
    dashboard.php
    form-login.php
  single-product/
    product-image.php
  content-product.php
404.php
archive.php
comments.php
footer.php
functions.php
header.php
index.php
page.php
search.php
sidebar.php
single.php
woocommerce.css
```

# Files

## File: assets/sass/helpers/_easings.scss
```scss
//============================================================
//
// Easing
//
// Thanks to Robert Penner for his sterling work on easing,
// and to Matthew Lein for converting these functions into
// approximated cubic-bezier functions. Respect.
//
// @see http://robertpenner.com/
// @see http://matthewlein.com/ceaser/
//
//============================================================
// Cubic
$easeInCubic : cubic-bezier(0.550, 0.055, 0.675, 0.190);
$easeOutCubic : cubic-bezier(0.215, 0.610, 0.355, 1.000);
$easeInOutCubic : cubic-bezier(0.645, 0.045, 0.355, 1.000);
// Circ
$easeInCirc : cubic-bezier(0.600, 0.040, 0.980, 0.335);
$easeOutCirc : cubic-bezier(0.075, 0.820, 0.165, 1.000);
$easeInOutCirc : cubic-bezier(0.785, 0.135, 0.150, 0.860);
// Expo
$easeInExpo : cubic-bezier(0.950, 0.050, 0.795, 0.035);
$easeOutExpo : cubic-bezier(0.190, 1.000, 0.220, 1.000);
$easeInOutExpo : cubic-bezier(1.000, 0.000, 0.000, 1.000);
// Quad
$easeInQuad : cubic-bezier(0.550, 0.085, 0.680, 0.530);
$easeOutQuad : cubic-bezier(0.250, 0.460, 0.450, 0.940);
$easeInOutQuad : cubic-bezier(0.455, 0.030, 0.515, 0.955);
// Quart
$easeInQuart : cubic-bezier(0.895, 0.030, 0.685, 0.220);
$easeOutQuart : cubic-bezier(0.165, 0.840, 0.440, 1.000);
$easeInOutQuart : cubic-bezier(0.770, 0.000, 0.175, 1.000);
// Quint
$easeInQuint : cubic-bezier(0.755, 0.050, 0.855, 0.060);
$easeOutQuint : cubic-bezier(0.230, 1.000, 0.320, 1.000);
$easeInOutQuint : cubic-bezier(0.860, 0.000, 0.070, 1.000);
// Sine
$easeInSine : cubic-bezier(0.470, 0.000, 0.745, 0.715);
$easeOutSine : cubic-bezier(0.390, 0.575, 0.565, 1.000);
$easeInOutSine : cubic-bezier(0.445, 0.050, 0.550, 0.950);
// Back
$easeInBack : cubic-bezier(0.600, -0.280, 0.735, 0.045);
$easeOutBack : cubic-bezier(0.175, 0.885, 0.320, 1.275);
$easeInOutBack : cubic-bezier(0.680, -0.550, 0.265, 1.550);
```

## File: assets/sass/helpers/_main.scss
```scss
//============================================================
// Transforms
//============================================================
@mixin transform($arguments...) {
    -webkit-transform: $arguments;
    -ms-transform: $arguments; // IE9
    transform: $arguments;
}
@mixin transform-origin($arguments...) {
    -webkit-transform-origin: $arguments;
    -ms-transform-origin: $arguments; // IE9
    transform-origin: $arguments;
}
@mixin rotate($arguments...) {
    -webkit-transform: rotate($arguments);
    -ms-transform: rotate($arguments); // IE9
    transform: rotate($arguments);
}
@mixin backface-visibility ($arguments) {
    -webkit-backface-visibility: $arguments;
    -moz-backface-visibility: $arguments;
    -ms-backface-visibility: $arguments;
    -o-backface-visibility: $arguments;
    backface-visibility: $arguments;
}
//============================================================
// Animations
//============================================================
@mixin transition($arguments...) {
    -webkit-transition: $arguments;
    transition: $arguments;
}
@mixin animation($arguments) {
    -webkit-animation: $arguments;
    animation: $arguments;
}
//============================================================
// Gradients
//============================================================
@mixin linear-gradient ($from, $to) {
    background-color: $from;
    background-image: -webkit-linear-gradient(top, $from, $to);
    /* Chrome 10-25, iOS 5+, Safari 5.1+ */
    background-image: linear-gradient(to bottom, $from, $to);
    /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */
}
//============================================================
// Structure
//============================================================
@mixin box-sizing ($arguments) {
    -webkit-box-sizing: $arguments;
    -moz-box-sizing: $arguments;
    -o-box-sizing: $arguments;
    box-sizing: $arguments;
}
```

## File: assets/sass/helpers/_mq.scss
```scss
@charset "UTF-8"; // Fixes an issue where Ruby locale is not set properly
                  // See https://github.com/sass-mq/sass-mq/pull/10
/// Base font size on the `<body>` element
///
/// Do not override this value, or things will break
///
/// @link https://github.com/sass-mq/sass-mq/issues/122
/// @deprecated This setting will be removed in sass-mq v6.0.0
/// @access private
/// @type Number (unit)
$mq-base-font-size: 16px !default;
/// Responsive mode
///
/// Set to `false` to enable support for browsers that do not support @media queries,
/// (IE <= 8, Firefox <= 3, Opera <= 9)
///
/// You could create a stylesheet served exclusively to older browsers,
/// where @media queries are rasterized
///
/// @example scss
///  // old-ie.scss
///  $mq-responsive: false;
///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint
///                   // larger breakpoints will be ignored
///
/// @type Boolean
/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation
$mq-responsive: true !default;
/// Breakpoint list
///
/// Name your breakpoints in a way that creates a ubiquitous language
/// across team members. It will improve communication between
/// stakeholders, designers, developers, and testers.
///
/// @type Map
/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples
$mq-breakpoints: (
    mobile:  320px,
    tablet:  740px,
    desktop: 980px,
    wide:    1300px
) !default;
/// Static breakpoint (for fixed-width layouts)
///
/// Define the breakpoint from $mq-breakpoints that should
/// be used as the target width for the fixed-width layout
/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss
///
/// @example scss
///  // tablet-only.scss
///  //
///  // Ignore all styles above tablet breakpoint,
///  // and fix the styles (such as the layout) at tablet width
///  $mq-responsive: false;
///  $mq-static-breakpoint: tablet;
///  @import 'main'; // @media queries in this file will be rasterized up to tablet
///                   // larger breakpoints will be ignored
///
/// @type String
/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples
$mq-static-breakpoint: desktop !default;
/// Show breakpoints in the top right corner
///
/// If you want to display the currently active breakpoint in the top
/// right corner of your site during development, add the breakpoints
/// to this list, ordered by width. For example: (mobile, tablet, desktop).
///
/// @example scss
///   $mq-show-breakpoints: (mobile, tablet, desktop);
///   @import 'path/to/mq';
///
/// @type map
$mq-show-breakpoints: () !default;
/// Customize the media type (for example: `@media screen` or `@media print`)
/// By default sass-mq uses an "all" media type (`@media all and …`)
///
/// @type String
/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples
$mq-media-type: all !default;
/// Convert pixels to ems
///
/// @param {Number} $px - value to convert
/// @ignore @param {Number} $base-font-size [$mq-base-font-size] - `<body>` font size (deprecated)
///
/// @example scss
///  $font-size-in-ems: mq-px2em(16px);
///  p { font-size: mq-px2em(16px); }
///
/// @requires $mq-base-font-size
/// @returns {Number}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
    @if ($mq-base-font-size != 16px) {
        @warn "Overriding $mq-base-font-size will break things, see https://github.com/sass-mq/sass-mq/issues/122.";
    }
    @if ($base-font-size != 16px) {
        @warn "The $base-font-size argument will be removed in sass-mq v6.0.0, as overriding it breaks things, see https://github.com/sass-mq/sass-mq/issues/122.";
    }
    @if unitless($px) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels.";
        @return mq-px2em($px * 1px, $base-font-size);
    } @else if unit($px) == em {
        @return $px;
    }
    @return ($px / $base-font-size) * 1em;
}
/// Get a breakpoint's width
///
/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints
///
/// @example scss
///  $tablet-width: mq-get-breakpoint-width(tablet);
///  @media (min-width: mq-get-breakpoint-width(desktop)) {}
///
/// @requires {Variable} $mq-breakpoints
///
/// @returns {Number} Value in pixels
@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {
    @if map-has-key($breakpoints, $name) {
        @return map-get($breakpoints, $name);
    } @else {
        @warn "Breakpoint #{$name} wasn't found in $breakpoints.";
    }
}
/// Media Query mixin
///
/// @param {String | Boolean} $from [false] - One of $mq-breakpoints
/// @param {String | Boolean} $until [false] - One of $mq-breakpoints
/// @param {String | Boolean} $and [false] - Additional media query parameters
/// @param {String} $media-type [$mq-media-type] - Media type: screen, print…
///
/// @ignore Undocumented API, for advanced use only:
/// @ignore @param {Map} $breakpoints [$mq-breakpoints]
/// @ignore @param {String} $static-breakpoint [$mq-static-breakpoint]
///
/// @content styling rules, wrapped into a @media query when $responsive is true
///
/// @requires {Variable} $mq-media-type
/// @requires {Variable} $mq-breakpoints
/// @requires {Variable} $mq-static-breakpoint
/// @requires {function} mq-px2em
/// @requires {function} mq-get-breakpoint-width
///
/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples
///
/// @example scss
///  .element {
///    @include mq($from: mobile) {
///      color: red;
///    }
///    @include mq($until: tablet) {
///      color: blue;
///    }
///    @include mq(mobile, tablet) {
///      color: green;
///    }
///    @include mq($from: tablet, $and: '(orientation: landscape)') {
///      color: teal;
///    }
///    @include mq(950px) {
///      color: hotpink;
///    }
///    @include mq(tablet, $media-type: screen) {
///      color: hotpink;
///    }
///    // Advanced use:
///    $my-breakpoints: (L: 900px, XL: 1200px);
///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {
///      color: hotpink;
///    }
///  }
@mixin mq(
    $from: false,
    $until: false,
    $and: false,
    $media-type: $mq-media-type,
    $breakpoints: $mq-breakpoints,
    $responsive: $mq-responsive,
    $static-breakpoint: $mq-static-breakpoint
) {
    $min-width: 0;
    $max-width: 0;
    $media-query: '';
    // From: this breakpoint (inclusive)
    @if $from {
        @if type-of($from) == number {
            $min-width: mq-px2em($from);
        } @else {
            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));
        }
    }
    // Until: that breakpoint (exclusive)
    @if $until {
        @if type-of($until) == number {
            $max-width: mq-px2em($until);
        } @else {
            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;
        }
    }
    // Responsive support is disabled, rasterize the output outside @media blocks
    // The browser will rely on the cascade itself.
    @if $responsive == false {
        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);
        $target-width: mq-px2em($static-breakpoint-width);
        // Output only rules that start at or span our target width
        @if (
            $and == false
            and $min-width <= $target-width
            and (
                $until == false or $max-width >= $target-width
            )
            and $media-type != 'print'
        ) {
            @content;
        }
    }
    // Responsive support is enabled, output rules inside @media queries
    @else {
        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }
        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }
        @if $and            { $media-query: '#{$media-query} and #{$and}'; }
        // Remove unnecessary media query prefix 'all and '
        @if ($media-type == 'all' and $media-query != '') {
            $media-type: '';
            $media-query: str-slice(unquote($media-query), 6);
        }
        @media #{$media-type + $media-query} {
            @content;
        }
    }
}
/// Quick sort
///
/// @author Sam Richards
/// @access private
/// @param {List} $list - List to sort
/// @returns {List} Sorted List
@function _mq-quick-sort($list) {
    $less:  ();
    $equal: ();
    $large: ();
    @if length($list) > 1 {
        $seed: nth($list, ceil(length($list) / 2));
        @each $item in $list {
            @if ($item == $seed) {
                $equal: append($equal, $item);
            } @else if ($item < $seed) {
                $less: append($less, $item);
            } @else if ($item > $seed) {
                $large: append($large, $item);
            }
        }
        @return join(join(_mq-quick-sort($less), $equal), _mq-quick-sort($large));
    }
    @return $list;
}
/// Sort a map by values (works with numbers only)
///
/// @access private
/// @param {Map} $map - Map to sort
/// @returns {Map} Map sorted by value
@function _mq-map-sort-by-value($map) {
    $map-sorted: ();
    $map-keys: map-keys($map);
    $map-values: map-values($map);
    $map-values-sorted: _mq-quick-sort($map-values);
    // Reorder key/value pairs based on key values
    @each $value in $map-values-sorted {
        $index: index($map-values, $value);
        $key: nth($map-keys, $index);
        $map-sorted: map-merge($map-sorted, ($key: $value));
        // Unset the value in $map-values to prevent the loop
        // from finding the same index twice
        $map-values: set-nth($map-values, $index, 0);
    }
    @return $map-sorted;
}
/// Add a breakpoint
///
/// @param {String} $name - Name of the breakpoint
/// @param {Number} $width - Width of the breakpoint
///
/// @requires {Variable} $mq-breakpoints
///
/// @example scss
///  @include mq-add-breakpoint(tvscreen, 1920px);
///  @include mq(tvscreen) {}
@mixin mq-add-breakpoint($name, $width) {
    $new-breakpoint: ($name: $width);
    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;
    $mq-breakpoints: _mq-map-sort-by-value($mq-breakpoints) !global;
}
/// Show the active breakpoint in the top right corner of the viewport
/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint
///
/// @param {List} $show-breakpoints [$mq-show-breakpoints] - List of breakpoints to show in the top right corner
/// @param {Map} $breakpoints [$mq-breakpoints] - Breakpoint names and sizes
///
/// @requires {Variable} $mq-breakpoints
/// @requires {Variable} $mq-show-breakpoints
///
/// @example scss
///  // Show breakpoints using global settings
///  @include mq-show-breakpoints;
///
///  // Show breakpoints using custom settings
///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));
@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {
    body:before {
        background-color: #FCF8E3;
        border-bottom: 1px solid #FBEED5;
        border-left: 1px solid #FBEED5;
        color: #C09853;
        font: small-caption;
        padding: 3px 6px;
        pointer-events: none;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 100;
        // Loop through the breakpoints that should be shown
        @each $show-breakpoint in $show-breakpoints {
            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);
            @include mq($show-breakpoint, $breakpoints: $breakpoints) {
                content: "#{$show-breakpoint} ≥ #{$width} (#{mq-px2em($width)})";
            }
        }
    }
}
@if length($mq-show-breakpoints) > 0 {
    @include mq-show-breakpoints;
}
```

## File: assets/sass/helpers/_typo.scss
```scss
//============================================================
// Typography
//============================================================
// An rem font-size mixin providing fallback to px
@mixin font-size($sizeValue: 1.4) {
    $remValue: $sizeValue;
    $pxValue: ($sizeValue * 10);
    font-size: #{$pxValue}px;
    font-size: #{$remValue}rem;
}
// Requires inline-block or block for proper styling
@mixin text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## File: assets/sass/pages/get-in-touch.scss
```scss
body.page-template-template-get-in-touch {
    background-color: #fff;
    color: #000;
    .footer-section {
        display: none;
    }
}
.getInTouch-section {
    &__wrapper {
        @include mq($from: desktop) {
            display: flex;
        }
    }
    &__banner {
        height: 250px;
        width: 100%;
        @include mq($from: desktop) {
            height: unset;
            order: 2;
        }
        @media (min-height: 801px) and (min-width: 1024px) {
            height: 100vh;
        }
    }
    &__mobileBannerImage {
        height: 100%;
        width: 100%;
        object-fit: cover;
        @include mq($from: desktop) {
            display: none;
        }
    }
    &__desktopBannerImage {
        display: none;
        height: 100%;
        width: 100%;
        object-fit: cover;
        @include mq($from: desktop) {
            display: block;
        }
    }
    &__details {
        padding: 2rem 3rem;
        @include mq($from: desktop) {
            order: 1;
            flex-basis: 55%;
            padding: 8rem 6rem 3rem;
        }
    }
    &__title {
        font-family: $blaak-black-regular;
        font-size: 26.3px;
        font-weight: 900;
        line-height: 24.7px;
        text-align: left;
        color: #0d0c0c;
        position: relative;
        @include mq($from: desktop) {
            font-size: 46.2px;
            line-height: 43.4px;
        }
        svg {
            position: absolute;
            left: -1.25rem;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
    &__subTitle {
        opacity: 0.7;
        font-family: $blaak-black-thin;
        font-size: 12px;
        font-weight: 100;
        line-height: 16.5px;
        letter-spacing: 0.18px;
        text-align: left;
        color: #0d0c0c;
        margin: 3rem 0 2rem;
        max-width: 220px;
        @include mq($from: desktop) {
            font-size: 20px;
            line-height: 27.4px;
            letter-spacing: 0.3px;
            max-width: 360px;
        }
    }
    &__socialLinks {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    &__socialLink {
        display: flex;
        align-items: center;
        margin-bottom: 3px;
        @include mq($from: desktop) {
            margin-bottom: 1rem;
        }
        &:nth-child(3) {
            svg {
                width: 15px;
                @include mq($from: desktop) {
                    width: 23px;
                }
            }
        }
        svg {
            width: 16px;
            margin-right: 1rem;
            @include mq($from: desktop) {
                width: 25px;
            }
        }
        a {
            display: flex;
            color: #000;
            text-decoration: none;
            align-items: center;
        }
    }
    // .phone-number {
    //     .getInTouch-section__socialLinkText {
    //         font-family: BlaakThin;
    //         font-weight: 600;
    //         color: #000000d1;
    //     }
    // }
    &__socialLinkText {
        display: inline-flex;
        opacity: 0.7;
        font-family: $blaak-black-thin;
        font-size: 13px;
        font-weight: 100;
        line-height: 17.9px;
        letter-spacing: 0.2px;
        text-align: left;
        color: #000;
        margin-bottom: 0;
        @include mq($from: desktop) {
            font-size: 21.6px;
            line-height: 29.7px;
            letter-spacing: 0.32px;
        }
    }
    &__addressWrapper {
        margin-top: 2rem;
    }
    &__addressTitle {
        margin-bottom: 0.5rem;
        font-family: $blaak-black-regular;
        font-size: 14px;
        font-weight: 900;
        line-height: 13.1px;
        text-align: left;
        color: #0d0c0c;
        @include mq($from: desktop) {
            font-size: 23.3px;
            line-height: 21.9px;
        }
    }
    &__address {
        opacity: 0.7;
        font-family: $blaak-black-thin;
        font-size: 12px;
        font-weight: 100;
        line-height: 16.5px;
        letter-spacing: 0.18px;
        text-align: left;
        color: #0d0c0c;
        max-width: 190px;
        margin-bottom: 0;
        @include mq($from: desktop) {
            font-size: 20px;
            line-height: 27.4px;
            letter-spacing: 0.3px;
            max-width: 350px;
        }
    }
    &__desktopContent {
        display: none;
        @include mq($from: desktop) {
            display: block;
            margin-top: 1.5rem;
        }
    }
    &__kirgoText {
        font-family: $lekton;
        font-size: 14.8px;
        font-weight: bold;
        letter-spacing: 5.25px;
        text-align: left;
        color: #000;
        margin-bottom: 3rem;
    }
    &__socialLinksDesktop {
        display: flex;
        gap: 2rem;
    }
    &__socialLinksDesktopItems {
        &:first-child {
            .getInTouch-section__socialLinksDesktopImage {
                width: 22px;
            }
        }
    }
    &__socialLinksDesktopImage {
        width: 25px;
    }
}
```

## File: assets/sass/pages/register.scss
```scss
.page-id-237 {
    .account-banner-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        // object-position: center -2rem;
    }
    .custom-registration {
        font-family: $lekton;
        padding: 2rem;
        color: #000;
        background-color: #fff;
        h2 {
            font-family: $blaak-black-regular;
            font-size: 26.3px;
            font-weight: 900;
            line-height: 24.7px;
            text-align: left;
            color: #0d0c0c;
            position: relative;
            margin-bottom: 1rem;
            text-transform: lowercase;
            &::before {
                content: url("/wp-content/themes/kirgo-theme/assets/images/icons/left-arrow.svg");
                margin-right: 10px;
            }
        }
        label {
            display: none;
        }
        input {
            width: 100%;
            padding: 1rem;
            line-height: 1;
            border-radius: 6px;
            font-family: $lekton;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: -0.14px;
            text-align: left;
            color: #000;
            text-transform: lowercase;
            -webkit-backdrop-filter: blur(4.9px);
            backdrop-filter: blur(4.9px);
            border: solid 0.3px rgb(13 12 12 / 60%);
            background-color: rgba(13, 12, 12, 0);
        }
        .woocommerce-Button.button {
            border-radius: 6px;
            border: solid 0 #000;
            background-color: #0d0c0c;
            font-family: $blaak-black-regular;
            font-size: 12.1px;
            font-weight: 900;
            line-height: 11.4px;
            text-align: center;
            color: #fff;
            width: 100%;
            padding: 1rem 0;
            text-transform: lowercase;
        }
        .woocommerce-privacy-policy-text {
            opacity: 0.7;
            font-family: $blaak-black-regular;
            font-size: 12px;
            font-weight: 100;
            line-height: 16.5px;
            letter-spacing: 0.18px;
            text-align: left;
            color: #0d0c0c;
            a {
                color: #0d0c0c;
                text-transform: capitalize;
            }
        }
        .sign-in-btn {
            border-radius: 6px;
            border: solid 1px #000;
            font-family: "BlaakRegular_personal";
            font-size: 12.1px;
            font-weight: 900;
            line-height: 11.4px;
            text-align: center;
            width: 100%;
            padding: 1rem 0;
            color: #000;
            background-color: #fff;
            display: flex;
            justify-content: center;
            text-decoration: none;
            margin-bottom: 1rem;
        }
    }
    .footer-section {
        display: none;
    }
}
```

## File: inc/custom-header.php
```php
/**
 * Sample implementation of the Custom Header feature
 *
 * You can add an optional custom header image to header.php like so ...
 *
	<?php the_header_image_tag(); ?>
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package kirgo
 */
/**
 * Set up the WordPress core custom header feature.
 *
 * @uses kirgo_header_style()
 */
function kirgo_custom_header_setup() {
⋮----
/**
	 * Styles the header image and text displayed on the blog.
	 *
	 * @see kirgo_custom_header_setup().
	 */
function kirgo_header_style() {
⋮----
/*
		 * If no custom options for text are set, let's bail.
		 * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: add_theme_support( 'custom-header' ).
		 */
⋮----
// If we get this far, we have custom styles. Let's do this.
⋮----
// Has the text been hidden?
		if ( ! display_header_text() ) :
⋮----
// If the user has set a custom color for the text use that.
```

## File: inc/customizer.php
```php
/**
 * kirgo Theme Customizer
 *
 * @package kirgo
 */
/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function kirgo_customize_register( $wp_customize ) {
$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
⋮----
$wp_customize->selective_refresh->add_partial(
⋮----
/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function kirgo_customize_partial_blogname() {
⋮----
/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function kirgo_customize_partial_blogdescription() {
⋮----
/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function kirgo_customize_preview_js() {
```

## File: inc/jetpack.php
```php
/**
 * Jetpack Compatibility File
 *
 * @link https://jetpack.com/
 *
 * @package kirgo
 */
/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 * See: https://jetpack.com/support/content-options/
 */
function kirgo_jetpack_setup() {
// Add theme support for Infinite Scroll.
⋮----
// Add theme support for Responsive Videos.
⋮----
// Add theme support for Content Options.
⋮----
/**
	 * Custom render function for Infinite Scroll.
	 */
function kirgo_infinite_scroll_render() {
```

## File: inc/template-functions.php
```php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package kirgo
 */
/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function kirgo_body_classes( $classes ) {
// Adds a class of hfeed to non-singular pages.
⋮----
// Adds a class of no-sidebar when there is no sidebar present.
⋮----
/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function kirgo_pingback_header() {
```

## File: inc/template-tags.php
```php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package kirgo
 */
⋮----
/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
function kirgo_posted_on() {
⋮----
/* translators: %s: post date. */
⋮----
echo '<span class="posted-on">' . $posted_on . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
	 * Prints HTML with meta information for the current author.
	 */
function kirgo_posted_by() {
⋮----
/* translators: %s: post author. */
⋮----
echo '<span class="byline"> ' . $byline . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
function kirgo_entry_footer() {
// Hide category and tag text for pages.
⋮----
/* translators: used between list items, there is a space after the comma */
⋮----
/* translators: 1: list of categories. */
printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'kirgo' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/* translators: 1: list of tags. */
printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'kirgo' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/* translators: %s: post title */
⋮----
/* translators: %s: Name of current post. Only visible to screen readers */
⋮----
/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
function kirgo_post_thumbnail() {
⋮----
endif; // End is_singular().
⋮----
/**
	 * Shim for sites older than 5.2.
	 *
	 * @link https://core.trac.wordpress.org/ticket/12563
	 */
function wp_body_open() {
```

## File: inc/wc-template-functions.php
```php
/**
 * WooCommerce Template
 *
 * Functions for the templating system.
 *
 * @package  WooCommerce\Functions
 * @version  2.5.0
 */
use Automattic\Jetpack\Constants;
⋮----
/**
 * Handle redirects before content is output - hooked into template_redirect so is_page works.
 */
function wc_template_redirect() {
⋮----
// phpcs:disable WordPress.Security.NonceVerification.Recommended
// When default permalinks are enabled, redirect shop page to post type archive url.
⋮----
// phpcs:enable WordPress.Security.NonceVerification.Recommended
// When on the checkout with an empty cart, redirect to cart page.
if ( is_page( wc_get_page_id( 'checkout' ) ) && wc_get_page_id( 'checkout' ) !== wc_get_page_id( 'cart' ) && WC()->cart->is_empty() && empty( $wp->query_vars['order-pay'] ) && ! isset( $wp->query_vars['order-received'] ) && ! is_customize_preview() && apply_filters( 'woocommerce_checkout_redirect_empty_cart', true ) ) {
⋮----
// Logout.
⋮----
// Redirect to the correct logout endpoint.
⋮----
// Trigger 404 if trying to access an endpoint on wrong page.
⋮----
$wp_query->set_404();
⋮----
// Redirect to the product page if we have a single product.
⋮----
if ( $product && $product->is_visible() ) {
wp_safe_redirect( get_permalink( $product->get_id() ), 302 );
⋮----
// Ensure gateways and shipping methods are loaded early.
⋮----
// Buffer the checkout page.
⋮----
WC()->payment_gateways();
WC()->shipping();
⋮----
/**
 * When loading sensitive checkout or account pages, send a HTTP header to limit rendering of pages to same origin iframes for security reasons.
 *
 * Can be disabled with: remove_action( 'template_redirect', 'wc_send_frame_options_header' );
 *
 * @since  2.3.10
 */
function wc_send_frame_options_header() {
⋮----
/**
 * No index our endpoints.
 * Prevent indexing pages like order-received.
 *
 * @since 2.5.3
 */
function wc_prevent_endpoint_indexing() {
// phpcs:disable WordPress.Security.NonceVerification.Recommended, WordPress.PHP.NoSilencedErrors.Discouraged
⋮----
// phpcs:enable WordPress.Security.NonceVerification.Recommended, WordPress.PHP.NoSilencedErrors.Discouraged
⋮----
/**
 * Remove adjacent_posts_rel_link_wp_head - pointless for products.
 *
 * @since 3.0.0
 */
function wc_prevent_adjacent_posts_rel_link_wp_head() {
⋮----
/**
 * Show the gallery if JS is disabled.
 *
 * @since 3.0.6
 */
function wc_gallery_noscript() {
⋮----
/**
 * When the_post is called, put product data into a global.
 *
 * @param mixed $post Post Object.
 * @return WC_Product
 */
function wc_setup_product_data( $post ) {
⋮----
/**
 * Sets up the woocommerce_loop global from the passed args or from the main query.
 *
 * @since 3.3.0
 * @param array $args Args to pass into the global.
 */
function wc_setup_loop( $args = array() ) {
⋮----
// If this is a main WC query, use global args as defaults.
if ( $GLOBALS['wp_query']->get( 'wc_query' ) ) {
⋮----
'is_search'    => $GLOBALS['wp_query']->is_search(),
⋮----
'per_page'     => $GLOBALS['wp_query']->get( 'posts_per_page' ),
'current_page' => max( 1, $GLOBALS['wp_query']->get( 'paged', 1 ) ),
⋮----
// Merge any existing values.
⋮----
/**
 * Resets the woocommerce_loop global.
 *
 * @since 3.3.0
 */
function wc_reset_loop() {
⋮----
/**
 * Gets a property from the woocommerce_loop global.
 *
 * @since 3.3.0
 * @param string $prop Prop to get.
 * @param string $default Default if the prop does not exist.
 * @return mixed
 */
function wc_get_loop_prop( $prop, $default = '' ) {
wc_setup_loop(); // Ensure shop loop is setup.
⋮----
/**
 * Sets a property in the woocommerce_loop global.
 *
 * @since 3.3.0
 * @param string $prop Prop to set.
 * @param string $value Value to set.
 */
function wc_set_loop_prop( $prop, $value = '' ) {
⋮----
/**
 * Set the current visbility for a product in the woocommerce_loop global.
 *
 * @since 4.4.0
 * @param int  $product_id Product it to cache visbiility for.
 * @param bool $value The poduct visibility value to cache.
 */
function wc_set_loop_product_visibility( $product_id, $value ) {
⋮----
/**
 * Gets the cached current visibility for a product from the woocommerce_loop global.
 *
 * @since 4.4.0
 * @param int $product_id Product id to get the cached visibility for.
 *
 * @return bool|null The cached product visibility, or null if on visibility has been cached for that product.
 */
function wc_get_loop_product_visibility( $product_id ) {
⋮----
/**
 * Should the WooCommerce loop be displayed?
 *
 * This will return true if we have posts (products) or if we have subcats to display.
 *
 * @since 3.4.0
 * @return bool
 */
function woocommerce_product_loop() {
⋮----
/**
 * Output generator tag to aid debugging.
 *
 * @param string $gen Generator.
 * @param string $type Type.
 * @return string
 */
function wc_generator_tag( $gen, $type ) {
$version = Constants::get_constant( 'WC_VERSION' );
⋮----
/**
 * Add body classes for WC pages.
 *
 * @param  array $classes Body Classes.
 * @return array
 */
function wc_body_class( $classes ) {
⋮----
foreach ( WC()->query->get_query_vars() as $key => $value ) {
⋮----
/**
 * NO JS handling.
 *
 * @since 3.4.0
 */
function wc_no_js() {
⋮----
/**
 * Display the classes for the product cat div.
 *
 * @since 2.4.0
 * @param string|array $class One or more classes to add to the class list.
 * @param object       $category object Optional.
 */
function wc_product_cat_class( $class = '', $category = null ) {
// Separates classes with a single space, collates classes for post DIV.
⋮----
/**
 * Get the default columns setting - this is how many products will be shown per row in loops.
 *
 * @since 3.3.0
 * @return int
 */
function wc_get_default_products_per_row() {
⋮----
if ( has_filter( 'loop_shop_columns' ) ) { // Legacy filter handling.
⋮----
/**
 * Get the default rows setting - this is how many product rows will be shown in loops.
 *
 * @since 3.3.0
 * @return int
 */
function wc_get_default_product_rows_per_page() {
⋮----
/**
 * Reset the product grid settings when a new theme is activated.
 *
 * @since 3.3.0
 */
function wc_reset_product_grid_settings() {
⋮----
wp_cache_flush(); // Flush any caches which could impact settings or templates.
⋮----
/**
 * Get classname for woocommerce loops.
 *
 * @since 2.6.0
 * @return string
 */
function wc_get_loop_class() {
⋮----
/**
 * Get the classes for the product cat div.
 *
 * @since 2.4.0
 *
 * @param string|array $class One or more classes to add to the class list.
 * @param object       $category object Optional.
 *
 * @return array
 */
function wc_get_product_cat_class( $class = '', $category = null ) {
⋮----
/**
 * Adds extra post classes for products via the WordPress post_class hook, if used.
 *
 * Note: For performance reasons we instead recommend using wc_product_class/wc_get_product_class instead.
 *
 * @since 2.1.0
 * @param array        $classes Current classes.
 * @param string|array $class Additional class.
 * @param int          $post_id Post ID.
 * @return array
 */
function wc_product_post_class( $classes, $class = '', $post_id = 0 ) {
⋮----
$classes[] = $product->get_stock_status();
if ( $product->is_on_sale() ) {
⋮----
if ( $product->is_featured() ) {
⋮----
if ( $product->is_downloadable() ) {
⋮----
if ( $product->is_virtual() ) {
⋮----
if ( $product->is_sold_individually() ) {
⋮----
if ( $product->is_taxable() ) {
⋮----
if ( $product->is_shipping_taxable() ) {
⋮----
if ( $product->is_purchasable() ) {
⋮----
if ( $product->get_type() ) {
$classes[] = 'product-type-' . $product->get_type();
⋮----
if ( $product->is_type( 'variable' ) && $product->get_default_attributes() ) {
⋮----
/**
 * Get product taxonomy HTML classes.
 *
 * @since 3.4.0
 * @param array  $term_ids Array of terms IDs or objects.
 * @param string $taxonomy Taxonomy.
 * @return array
 */
function wc_get_product_taxonomy_class( $term_ids, $taxonomy ) {
⋮----
// 'post_tag' uses the 'tag' prefix for backward compatibility.
⋮----
/**
 * Retrieves the classes for the post div as an array.
 *
 * This method was modified from WordPress's get_post_class() to allow the removal of taxonomies
 * (for performance reasons). Previously wc_product_post_class was hooked into post_class. @since 3.6.0
 *
 * @since 3.4.0
 * @param string|array           $class      One or more classes to add to the class list.
 * @param int|WP_Post|WC_Product $product Product ID or product object.
 * @return array
 */
function wc_get_product_class( $class = '', $product = null ) {
⋮----
// Product was null so pull from global.
⋮----
// Make sure we have a valid product, or set to false.
⋮----
// Run through the post_class hook so 3rd parties using this previously can still append classes.
// Note, to change classes you will need to use the newer woocommerce_post_class filter.
// @internal This removes the wc_product_post_class filter so classes are not duplicated.
⋮----
$post_classes = apply_filters( 'post_class', $post_classes, $class, $product->get_id() );
⋮----
'post-' . $product->get_id(),
'status-' . $product->get_status(),
⋮----
$product->get_stock_status(),
⋮----
wc_get_product_taxonomy_class( $product->get_category_ids(), 'product_cat' ),
wc_get_product_taxonomy_class( $product->get_tag_ids(), 'product_tag' )
⋮----
if ( $product->get_image_id() ) {
⋮----
if ( $product->get_post_password() ) {
$classes[] = post_password_required( $product->get_id() ) ? 'post-password-required' : 'post-password-protected';
⋮----
// Include attributes and any extra taxonomies only if enabled via the hook - this is a performance issue.
⋮----
$type       = 'variation' === $product->get_type() ? 'product_variation' : 'product';
⋮----
$classes = array_merge( $classes, wc_get_product_taxonomy_class( (array) get_the_terms( $product->get_id(), $taxonomy ), $taxonomy ) );
⋮----
/**
	 * WooCommerce Post Class filter.
	 *
	 * @since 3.6.2
	 * @param array      $classes Array of CSS classes.
	 * @param WC_Product $product Product object.
	 */
⋮----
/**
 * Display the classes for the product div.
 *
 * @since 3.4.0
 * @param string|array           $class      One or more classes to add to the class list.
 * @param int|WP_Post|WC_Product $product_id Product ID or product object.
 */
function wc_product_class( $class = '', $product_id = null ) {
⋮----
/**
 * Outputs hidden form inputs for each query string variable.
 *
 * @since 3.0.0
 * @param string|array $values Name value pairs, or a URL to parse.
 * @param array        $exclude Keys to exclude.
 * @param string       $current_key Current key we are outputting.
 * @param bool         $return Whether to return.
 * @return string
 */
function wc_query_string_form_fields( $values = null, $exclude = array(), $current_key = '', $return = false ) {
⋮----
// phpcs:ignore WordPress.Security.NonceVerification.Recommended
⋮----
// This is to preserve full-stops, pluses and spaces in the query string when ran through parse_str.
⋮----
// Parse the string.
⋮----
// Convert the full-stops, pluses and spaces back and add to values array.
⋮----
echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
 * Get the terms and conditions page ID.
 *
 * @since 3.4.0
 * @return int
 */
function wc_terms_and_conditions_page_id() {
⋮----
/**
 * Get the privacy policy page ID.
 *
 * @since 3.4.0
 * @return int
 */
function wc_privacy_policy_page_id() {
⋮----
/**
 * See if the checkbox is enabled or not based on the existance of the terms page and checkbox text.
 *
 * @since 3.4.0
 * @return bool
 */
function wc_terms_and_conditions_checkbox_enabled() {
⋮----
/**
 * Get the terms and conditions checkbox text, if set.
 *
 * @since 3.4.0
 * @return string
 */
function wc_get_terms_and_conditions_checkbox_text() {
/* translators: %s terms and conditions page name and link */
⋮----
/**
 * Get the privacy policy text, if set.
 *
 * @since 3.4.0
 * @param string $type Type of policy to load. Valid values include registration and checkout.
 * @return string
 */
function wc_get_privacy_policy_text( $type = '' ) {
⋮----
/* translators: %s privacy policy page name and link */
⋮----
/**
 * Output t&c checkbox text.
 *
 * @since 3.4.0
 */
function wc_terms_and_conditions_checkbox_text() {
⋮----
/**
 * Output t&c page's content (if set). The page can be set from checkout settings.
 *
 * @since 3.4.0
 */
function wc_terms_and_conditions_page_content() {
⋮----
echo '<div class="woocommerce-terms-and-conditions" style="display: none; max-height: 200px; overflow: auto;">' . wc_format_content( wp_kses_post( $page->post_content ) ) . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
 * Render privacy policy text on the checkout.
 *
 * @since 3.4.0
 */
function wc_checkout_privacy_policy_text() {
⋮----
/**
 * Render privacy policy text on the register forms.
 *
 * @since 3.4.0
 */
function wc_registration_privacy_policy_text() {
⋮----
/**
 * Output privacy policy text. This is custom text which can be added via the customizer/privacy settings section.
 *
 * Loads the relevant policy for the current page unless a specific policy text is required.
 *
 * @since 3.4.0
 * @param string $type Type of policy to load. Valid values include registration and checkout.
 */
function wc_privacy_policy_text( $type = 'checkout' ) {
⋮----
/**
 * Replaces placeholders with links to WooCommerce policy pages.
 *
 * @since 3.4.0
 * @param string $text Text to find/replace within.
 * @return string
 */
function wc_replace_policy_page_link_placeholders( $text ) {
⋮----
/**
 * Template pages
 */
⋮----
/**
	 * Output WooCommerce content.
	 *
	 * This function is only used in the optional 'woocommerce.php' template.
	 * which people can add to their themes to add basic woocommerce support.
	 * without hooks or modifying core templates.
	 */
function woocommerce_content() {
⋮----
/**
 * Global
 */
⋮----
/**
	 * Output the start of the page wrapper.
	 */
function woocommerce_output_content_wrapper() {
⋮----
/**
	 * Output the end of the page wrapper.
	 */
function woocommerce_output_content_wrapper_end() {
⋮----
/**
	 * Get the shop sidebar template.
	 */
function woocommerce_get_sidebar() {
⋮----
/**
	 * Adds a demo store banner to the site if enabled.
	 */
function woocommerce_demo_store() {
⋮----
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
 * Loop
 */
⋮----
/**
	 * Page Title function.
	 *
	 * @param  bool $echo Should echo title.
	 * @return string
	 */
function woocommerce_page_title( $echo = true ) {
⋮----
/* translators: %s: search query */
⋮----
/* translators: %s: page number */
⋮----
/**
	 * Output the start of a product loop. By default this is a UL.
	 *
	 * @param bool $echo Should echo?.
	 * @return string
	 */
function woocommerce_product_loop_start( $echo = true ) {
⋮----
/**
	 * Output the end of a product loop. By default this is a UL.
	 *
	 * @param bool $echo Should echo?.
	 * @return string
	 */
function woocommerce_product_loop_end( $echo = true ) {
⋮----
/**
	 * Show the product title in the product loop. By default this is an H2.
	 */
function woocommerce_template_loop_product_title() {
echo '<h2 class="' . esc_attr( apply_filters( 'woocommerce_product_loop_title_classes', 'woocommerce-loop-product__title' ) ) . '">' . get_the_title() . '</h2>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
	 * Show the subcategory title in the product loop.
	 *
	 * @param object $category Category object.
	 */
function woocommerce_template_loop_category_title( $category ) {
⋮----
/**
	 * Insert the opening anchor tag for products in the loop.
	 */
function woocommerce_template_loop_product_link_open() {
⋮----
/**
	 * Insert the closing anchor tag for products in the loop.
	 */
function woocommerce_template_loop_product_link_close() {
⋮----
/**
	 * Insert the opening anchor tag for categories in the loop.
	 *
	 * @param int|object|string $category Category ID, Object or String.
	 */
function woocommerce_template_loop_category_link_open( $category ) {
⋮----
/* translators: %s: Category name */
⋮----
/**
	 * Insert the closing anchor tag for categories in the loop.
	 */
function woocommerce_template_loop_category_link_close() {
⋮----
/**
	 * Show an archive description on taxonomy archives.
	 */
function woocommerce_taxonomy_archive_description() {
⋮----
/**
				 * Filters the archive's raw description on taxonomy archives.
				 *
				 * @since 6.7.0
				 *
				 * @param string  $term_description Raw description text.
				 * @param WP_Term $term             Term object for this taxonomy archive.
				 */
⋮----
echo '<div class="term-description">' . wc_format_content( wp_kses_post( $term_description ) ) . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
	 * Show a shop page description on product archives.
	 */
function woocommerce_product_archive_description() {
// Don't display the description on search results page.
⋮----
// This is needed for the search product block to work.
⋮----
echo '<div class="page-description">' . $description . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/**
	 * Get the add to cart template for the loop.
	 *
	 * @param array $args Arguments.
	 */
function woocommerce_template_loop_add_to_cart( $args = array() ) {
⋮----
wc_wp_theme_get_element_class_name( 'button' ), // escaped in the template.
'product_type_' . $product->get_type(),
$product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
$product->supports( 'ajax_add_to_cart' ) && $product->is_purchasable() && $product->is_in_stock() ? 'ajax_add_to_cart' : '',
⋮----
'data-product_id'  => $product->get_id(),
'data-product_sku' => $product->get_sku(),
'aria-label'       => $product->add_to_cart_description(),
⋮----
/**
	 * Get the product thumbnail for the loop.
	 */
function woocommerce_template_loop_product_thumbnail() {
⋮----
/**
	 * Get the product price for the loop.
	 */
function woocommerce_template_loop_price() {
⋮----
/**
	 * Display the average rating in the loop.
	 */
function woocommerce_template_loop_rating() {
⋮----
/**
	 * Get the sale flash for the loop.
	 */
function woocommerce_show_product_loop_sale_flash() {
⋮----
/**
	 * Get the product thumbnail, or the placeholder if not set.
	 *
	 * @param string $size (default: 'woocommerce_thumbnail').
	 * @param  array $attr Image attributes.
	 * @param  bool  $placeholder True to return $placeholder if no image is found, or false to return an empty string.
	 * @return string
	 */
function woocommerce_get_product_thumbnail( $size = 'woocommerce_thumbnail', $attr = array(), $placeholder = true ) {
⋮----
return $product ? $product->get_image( $image_size, $attr, $placeholder ) : '';
⋮----
/**
	 * Output the result count text (Showing x - x of x results).
	 */
function woocommerce_result_count() {
⋮----
/**
	 * Output the product sorting options.
	 */
function woocommerce_catalog_ordering() {
⋮----
/**
	 * Output the pagination.
	 */
function woocommerce_pagination() {
⋮----
/**
 * Single Product
 */
⋮----
/**
	 * Output the product image before the single product summary.
	 */
function woocommerce_show_product_images() {
⋮----
/**
	 * Output the product thumbnails.
	 */
function woocommerce_show_product_thumbnails() {
⋮----
/**
 * Get HTML for a gallery image.
 *
 * Hooks: woocommerce_gallery_thumbnail_size, woocommerce_gallery_image_size and woocommerce_gallery_full_size accept name based image sizes, or an array of width/height values.
 *
 * @since 3.3.2
 * @param int  $attachment_id Attachment ID.
 * @param bool $main_image Is this the main image or a thumbnail?.
 * @return string
 */
function wc_get_gallery_image_html( $attachment_id, $main_image = false ) {
⋮----
/**
	 * Output the product tabs.
	 */
function woocommerce_output_product_data_tabs() {
⋮----
/**
	 * Output the product title.
	 */
function woocommerce_template_single_title() {
⋮----
/**
	 * Output the product rating.
	 */
function woocommerce_template_single_rating() {
⋮----
/**
	 * Output the product price.
	 */
function woocommerce_template_single_price() {
⋮----
/**
	 * Output the product short description (excerpt).
	 */
function woocommerce_template_single_excerpt() {
⋮----
/**
	 * Output the product meta.
	 */
function woocommerce_template_single_meta() {
⋮----
/**
	 * Output the product sharing.
	 */
function woocommerce_template_single_sharing() {
⋮----
/**
	 * Output the product sale flash.
	 */
function woocommerce_show_product_sale_flash() {
⋮----
/**
	 * Trigger the single product add to cart action.
	 */
function woocommerce_template_single_add_to_cart() {
⋮----
do_action( 'woocommerce_' . $product->get_type() . '_add_to_cart' );
⋮----
/**
	 * Output the simple product add to cart area.
	 */
function woocommerce_simple_add_to_cart() {
⋮----
/**
	 * Output the grouped product add to cart area.
	 */
function woocommerce_grouped_add_to_cart() {
⋮----
$products = array_filter( array_map( 'wc_get_product', $product->get_children() ), 'wc_products_array_filter_visible_grouped' );
⋮----
/**
	 * Output the variable product add to cart area.
	 */
function woocommerce_variable_add_to_cart() {
⋮----
// Enqueue variation scripts.
⋮----
// Get Available variations?
		$get_variations = count( $product->get_children() ) <= apply_filters( 'woocommerce_ajax_variation_threshold', 30, $product );
⋮----
$get_variations = count( $product->get_children() ) <= apply_filters( 'woocommerce_ajax_variation_threshold', 30, $product );
// Load the template.
⋮----
'available_variations' => $get_variations ? $product->get_available_variations() : false,
'attributes'           => $product->get_variation_attributes(),
'selected_attributes'  => $product->get_default_attributes(),
⋮----
/**
	 * Output the external product add to cart area.
	 */
function woocommerce_external_add_to_cart() {
⋮----
if ( ! $product->add_to_cart_url() ) {
⋮----
'product_url' => $product->add_to_cart_url(),
'button_text' => $product->single_add_to_cart_text(),
⋮----
/**
	 * Output the quantity input for add to cart forms.
	 *
	 * @param  array           $args Args for the input.
	 * @param  WC_Product|null $product Product.
	 * @param  boolean         $echo Whether to return or echo|string.
	 *
	 * @return string
	 */
function woocommerce_quantity_input( $args = array(), $product = null, $echo = true ) {
⋮----
'product_name' => $product ? $product->get_title() : '',
⋮----
// When autocomplete is enabled in firefox, it will overwrite actual value with what user entered last. So we default to off.
// See @link https://github.com/woocommerce/woocommerce/issues/30733.
⋮----
// Apply sanity to min/max args - min cannot be lower than 0.
⋮----
// Max cannot be lower than min if defined.
⋮----
/**
		 * The input type attribute will generally be 'number' unless the quantity cannot be changed, in which case
		 * it will be set to 'hidden'. An exception is made for non-hidden readonly inputs: in this case we set the
		 * type to 'text' (this prevents most browsers from rendering increment/decrement arrows, which are useless
		 * and/or confusing in this context).
		 */
⋮----
/**
		 * Controls the quantity input's type attribute.
		 *
		 * @since 7.4.0
		 *
		 * @param string $type A valid input type attribute value, usually 'number' or 'hidden'.
		 */
⋮----
/**
	 * Output the description tab content.
	 */
function woocommerce_product_description_tab() {
⋮----
/**
	 * Output the attributes tab content.
	 */
function woocommerce_product_additional_information_tab() {
⋮----
/**
	 * Add default product tabs to product pages.
	 *
	 * @param array $tabs Array of tabs.
	 * @return array
	 */
function woocommerce_default_product_tabs( $tabs = array() ) {
⋮----
// Description tab - shows product content.
⋮----
// Additional information tab - shows attributes.
if ( $product && ( $product->has_attributes() || apply_filters( 'wc_product_enable_dimensions_display', $product->has_weight() || $product->has_dimensions() ) ) ) {
⋮----
// Reviews tab - shows comments.
⋮----
/* translators: %s: reviews count */
'title'    => sprintf( __( 'Reviews (%d)', 'woocommerce' ), $product->get_review_count() ),
⋮----
/**
	 * Sort tabs by priority.
	 *
	 * @param array $tabs Array of tabs.
	 * @return array
	 */
function woocommerce_sort_product_tabs( $tabs = array() ) {
// Make sure the $tabs parameter is an array.
⋮----
// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_trigger_error
⋮----
// Re-order tabs by priority.
⋮----
/**
			 * Sort Priority Callback Function
			 *
			 * @param array $a Comparison A.
			 * @param array $b Comparison B.
			 * @return bool
			 */
function _sort_priority_callback( $a, $b ) {
⋮----
/**
	 * Output the Review comments template.
	 *
	 * @param WP_Comment $comment Comment object.
	 * @param array      $args Arguments.
	 * @param int        $depth Depth.
	 */
function woocommerce_comments( $comment, $args, $depth ) {
// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
⋮----
/**
	 * Display the review authors gravatar
	 *
	 * @param array $comment WP_Comment.
	 * @return void
	 */
function woocommerce_review_display_gravatar( $comment ) {
⋮----
/**
	 * Display the reviewers star rating
	 *
	 * @return void
	 */
function woocommerce_review_display_rating() {
⋮----
/**
	 * Display the review authors meta (name, verified owner, review date)
	 *
	 * @return void
	 */
function woocommerce_review_display_meta() {
⋮----
/**
	 * Display the review content.
	 */
function woocommerce_review_display_comment_text() {
⋮----
/**
	 * Output the related products.
	 */
function woocommerce_output_related_products() {
⋮----
'orderby'        => 'rand', // @codingStandardsIgnoreLine.
⋮----
/**
	 * Output the related products.
	 *
	 * @param array $args Provided arguments.
	 */
function woocommerce_related_products( $args = array() ) {
⋮----
// Get visible related products then sort them at random.
$args['related_products'] = array_filter( array_map( 'wc_get_product', wc_get_related_products( $product->get_id(), $args['posts_per_page'], $product->get_upsell_ids() ) ), 'wc_products_array_filter_visible' );
// Handle orderby.
⋮----
// Set global loop values.
⋮----
/**
	 * Output product up sells.
	 *
	 * @param int    $limit (default: -1).
	 * @param int    $columns (default: 4).
	 * @param string $orderby Supported values - rand, title, ID, date, modified, menu_order, price.
	 * @param string $order Sort direction.
	 */
function woocommerce_upsell_display( $limit = '-1', $columns = 4, $orderby = 'rand', $order = 'desc' ) {
⋮----
// Handle the legacy filter which controlled posts per page etc.
⋮----
// Get visible upsells then sort them at random, then limit result set.
$upsells = wc_products_array_orderby( array_filter( array_map( 'wc_get_product', $product->get_upsell_ids() ), 'wc_products_array_filter_visible' ), $orderby, $order );
⋮----
// Not used now, but used in previous version of up-sells.php.
⋮----
/** Cart */
⋮----
/**
	 * Output the cart shipping calculator.
	 *
	 * @param string $button_text Text for the shipping calculation toggle.
	 */
function woocommerce_shipping_calculator( $button_text = '' ) {
if ( 'no' === get_option( 'woocommerce_enable_shipping_calc' ) || ! WC()->cart->needs_shipping() ) {
⋮----
/**
	 * Output the cart totals.
	 */
function woocommerce_cart_totals() {
⋮----
/**
	 * Output the cart cross-sells.
	 *
	 * @param  int    $limit (default: 2).
	 * @param  int    $columns (default: 2).
	 * @param  string $orderby (default: 'rand').
	 * @param  string $order (default: 'desc').
	 */
function woocommerce_cross_sell_display( $limit = 2, $columns = 2, $orderby = 'rand', $order = 'desc' ) {
⋮----
// Get visible cross sells then sort them at random.
$cross_sells = array_filter( array_map( 'wc_get_product', WC()->cart->get_cross_sells() ), 'wc_products_array_filter_visible' );
⋮----
// Handle orderby and limit results.
⋮----
/**
	 * Output the proceed to checkout button.
	 */
function woocommerce_button_proceed_to_checkout() {
⋮----
/**
	 * Output the view cart button.
	 */
function woocommerce_widget_shopping_cart_button_view_cart() {
⋮----
function woocommerce_widget_shopping_cart_proceed_to_checkout() {
⋮----
/**
	 * Output to view cart subtotal.
	 *
	 * @since 3.7.0
	 */
function woocommerce_widget_shopping_cart_subtotal() {
echo '<strong>' . esc_html__( 'Subtotal:', 'woocommerce' ) . '</strong> ' . WC()->cart->get_cart_subtotal(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
/** Mini-Cart */
⋮----
/**
	 * Output the Mini-cart - used by cart widget.
	 *
	 * @param array $args Arguments.
	 */
function woocommerce_mini_cart( $args = array() ) {
⋮----
/** Login */
⋮----
/**
	 * Output the WooCommerce Login Form.
	 *
	 * @param array $args Arguments.
	 */
function woocommerce_login_form( $args = array() ) {
⋮----
/**
	 * Output the WooCommerce Checkout Login Form.
	 */
function woocommerce_checkout_login_form() {
⋮----
'checkout' => WC()->checkout(),
⋮----
/**
	 * Output the WooCommerce Breadcrumb.
	 *
	 * @param array $args Arguments.
	 */
function woocommerce_breadcrumb( $args = array() ) {
⋮----
$breadcrumbs->add_crumb( $args['home'], apply_filters( 'woocommerce_breadcrumb_home_url', home_url() ) );
⋮----
$args['breadcrumb'] = $breadcrumbs->generate();
/**
		 * WooCommerce Breadcrumb hook
		 *
		 * @hooked WC_Structured_Data::generate_breadcrumblist_data() - 10
		 */
⋮----
/**
	 * Output the Order review table for the checkout.
	 *
	 * @param bool $deprecated Deprecated param.
	 */
function woocommerce_order_review( $deprecated = false ) {
⋮----
/**
	 * Output the Payment Methods on the checkout.
	 */
function woocommerce_checkout_payment() {
if ( WC()->cart->needs_payment() ) {
$available_gateways = WC()->payment_gateways()->get_available_payment_gateways();
WC()->payment_gateways()->set_current_gateway( $available_gateways );
⋮----
'checkout'           => WC()->checkout(),
⋮----
/**
	 * Output the Coupon form for the checkout.
	 */
function woocommerce_checkout_coupon_form() {
if ( is_user_logged_in() || WC()->checkout()->is_registration_enabled() || ! WC()->checkout()->is_registration_required() ) {
⋮----
/**
	 * Check if we will be showing products or not (and not sub-categories only).
	 *
	 * @return bool
	 */
function woocommerce_products_will_display() {
⋮----
/**
	 * See what is going to display in the loop.
	 *
	 * @since 3.3.0
	 * @return string Either products, subcategories, or both, based on current page.
	 */
function woocommerce_get_loop_display_mode() {
// Only return products when filtering things.
⋮----
// Ensure valid value.
⋮----
// If we're showing categories, ensure we actually have something to show.
⋮----
/**
	 * Maybe display categories before, or instead of, a product loop.
	 *
	 * @since 3.3.0
	 * @param string $loop_html HTML.
	 * @return string
	 */
function woocommerce_maybe_show_product_subcategories( $loop_html = '' ) {
if ( wc_get_loop_prop( 'is_shortcode' ) && ! WC_Template_Loader::in_content_filter() ) {
⋮----
// If displaying categories, append to the loop.
⋮----
// This removes pagination and products from display for themes not using wc_get_loop_prop in their product loops.  @todo Remove in future major version.
⋮----
if ( $wp_query->is_main_query() ) {
⋮----
/**
	 * This is a legacy function which used to check if we needed to display subcats and then output them. It was called by templates.
	 *
	 * From 3.3 onwards this is all handled via hooks and the woocommerce_maybe_show_product_subcategories function.
	 *
	 * Since some templates have not updated compatibility, to avoid showing incorrect categories this function has been deprecated and will
	 * return nothing. Replace usage with woocommerce_output_product_categories to render the category list manually.
	 *
	 * This is a legacy function which also checks if things should display.
	 * Themes no longer need to call these functions. It's all done via hooks.
	 *
	 * @deprecated 3.3.1 @todo Add a notice in a future version.
	 * @param array $args Arguments.
	 * @return null|boolean
	 */
function woocommerce_product_subcategories( $args = array() ) {
⋮----
// We can still render if display is forced.
⋮----
// Output nothing. woocommerce_maybe_show_product_subcategories will handle the output of cats.
⋮----
// This removes pagination and products from display for themes not using wc_get_loop_prop in their product loops. @todo Remove in future major version.
⋮----
/**
	 * Display product sub categories as thumbnails.
	 *
	 * This is a replacement for woocommerce_product_subcategories which also does some logic
	 * based on the loop. This function however just outputs when called.
	 *
	 * @since 3.3.1
	 * @param array $args Arguments.
	 * @return boolean
	 */
function woocommerce_output_product_categories( $args = array() ) {
⋮----
/**
	 * Get (and cache) product subcategories.
	 *
	 * @param int $parent_id Get subcategories of this ID.
	 * @return array
	 */
function woocommerce_get_product_subcategories( $parent_id = 0 ) {
⋮----
// NOTE: using child_of instead of parent - this is not ideal but due to a WP bug ( https://core.trac.wordpress.org/ticket/15626 ) pad_counts won't work.
⋮----
/**
	 * Show subcategory thumbnails.
	 *
	 * @param mixed $category Category.
	 */
function woocommerce_subcategory_thumbnail( $category ) {
⋮----
// Prevent esc_url from breaking spaces in urls for image embeds.
// Ref: https://core.trac.wordpress.org/ticket/23605.
⋮----
// Add responsive image markup if available.
⋮----
/**
	 * Displays order details in a table.
	 *
	 * @param mixed $order_id Order ID.
	 */
function woocommerce_order_details_table( $order_id ) {
⋮----
/**
	 * Displays order downloads in a table.
	 *
	 * @since 3.2.0
	 * @param array $downloads Downloads.
	 */
function woocommerce_order_downloads_table( $downloads ) {
⋮----
/**
	 * Display an 'order again' button on the view order page.
	 *
	 * @param object $order Order.
	 */
function woocommerce_order_again_button( $order ) {
if ( ! $order || ! $order->has_status( apply_filters( 'woocommerce_valid_order_statuses_for_order_again', array( 'completed' ) ) ) || ! is_user_logged_in() ) {
⋮----
'order_again_url' => wp_nonce_url( add_query_arg( 'order_again', $order->get_id(), wc_get_cart_url() ), 'woocommerce-order_again' ),
⋮----
/** Forms */
⋮----
/**
	 * Outputs a checkout/address form field.
	 *
	 * @param string $key Key.
	 * @param mixed  $args Arguments.
	 * @param string $value (default: null).
	 * @return string
	 */
function woocommerce_form_field( $key, $args, $value = null ) {
⋮----
// Custom attribute handling.
⋮----
$countries = 'shipping_country' === $key ? WC()->countries->get_shipping_countries() : WC()->countries->get_allowed_countries();
⋮----
/* Get country this state field is representing */
$for_country = isset( $args['country'] ) ? $args['country'] : WC()->checkout->get_value( 'billing_state' === $key ? 'billing_country' : 'shipping_country' );
$states      = WC()->countries->get_states( $for_country );
⋮----
// If we have a blank option, select2 needs a placeholder.
⋮----
/**
		 * Filter by type.
		 */
⋮----
/**
		 * General filter on form fields.
		 *
		 * @since 3.4.0
		 */
⋮----
/**
	 * Display product search form.
	 *
	 * Will first attempt to locate the product-searchform.php file in either the child or.
	 * the parent, then load it. If it doesn't exist, then the default search form.
	 * will be displayed.
	 *
	 * The default searchform uses html5.
	 *
	 * @param bool $echo (default: true).
	 * @return string
	 */
function get_product_search_form( $echo = true ) {
⋮----
/**
	 * Output the Auth header.
	 */
function woocommerce_output_auth_header() {
⋮----
/**
	 * Output the Auth footer.
	 */
function woocommerce_output_auth_footer() {
⋮----
/**
	 * Output placeholders for the single variation.
	 */
function woocommerce_single_variation() {
⋮----
/**
	 * Output the add to cart button for variations.
	 */
function woocommerce_single_variation_add_to_cart_button() {
⋮----
/**
	 * Output a list of variation attributes for use in the cart forms.
	 *
	 * @param array $args Arguments.
	 * @since 2.4.0
	 */
function wc_dropdown_variation_attribute_options( $args = array() ) {
⋮----
// Get selected value.
⋮----
$args['selected'] = isset( $_REQUEST[ $selected_key ] ) ? wc_clean( wp_unslash( $_REQUEST[ $selected_key ] ) ) : $args['product']->get_variation_default_attribute( $args['attribute'] );
⋮----
$show_option_none_text = $args['show_option_none'] ? $args['show_option_none'] : __( 'Choose an option', 'woocommerce' ); // We'll do our best to hide the placeholder, but we'll need to show something when resetting options.
⋮----
$attributes = $product->get_variation_attributes();
⋮----
// Get terms if this is a taxonomy - ordered. We need the names too.
⋮----
$product->get_id(),
⋮----
// This handles < 2.4.0 bw compatibility where text attributes were not sanitized.
⋮----
/**
	 * My Account content output.
	 */
function woocommerce_account_content() {
⋮----
// Ignore pagename param.
⋮----
// No endpoint found? Default to dashboard.
⋮----
/**
	 * My Account navigation template.
	 */
function woocommerce_account_navigation() {
⋮----
/**
	 * My Account > Orders template.
	 *
	 * @param int $current_page Current page number.
	 */
function woocommerce_account_orders( $current_page ) {
⋮----
/**
	 * My Account > View order template.
	 *
	 * @param int $order_id Order ID.
	 */
function woocommerce_account_view_order( $order_id ) {
WC_Shortcode_My_Account::view_order( absint( $order_id ) );
⋮----
/**
	 * My Account > Downloads template.
	 */
function woocommerce_account_downloads() {
⋮----
/**
	 * My Account > Edit address template.
	 *
	 * @param string $type Address type.
	 */
function woocommerce_account_edit_address( $type ) {
⋮----
WC_Shortcode_My_Account::edit_address( $type );
⋮----
function woocommerce_account_payment_methods() {
⋮----
/**
	 * My Account > Add payment method template.
	 */
function woocommerce_account_add_payment_method() {
WC_Shortcode_My_Account::add_payment_method();
⋮----
/**
	 * My Account > Edit account template.
	 */
function woocommerce_account_edit_account() {
WC_Shortcode_My_Account::edit_account();
⋮----
/**
	 * Handles the loop when no products were found/no product exist.
	 */
function wc_no_products_found() {
⋮----
/**
	 * Get HTML for the order items to be shown in emails.
	 *
	 * @param WC_Order $order Order object.
	 * @param array    $args Arguments.
	 *
	 * @since 3.0.0
	 * @return string
	 */
function wc_get_email_order_items( $order, $args = array() ) {
⋮----
'items'               => $order->get_items(),
'show_download_links' => $order->is_download_permitted() && ! $args['sent_to_admin'],
⋮----
'show_purchase_note'  => $order->is_paid() && ! $args['sent_to_admin'],
⋮----
/**
	 * Display item meta data.
	 *
	 * @since  3.0.0
	 * @param  WC_Order_Item $item Order Item.
	 * @param  array         $args Arguments.
	 * @return string|void
	 */
function wc_display_item_meta( $item, $args = array() ) {
⋮----
foreach ( $item->get_all_formatted_meta_data() as $meta_id => $meta ) {
⋮----
/**
	 * Display item download links.
	 *
	 * @since  3.0.0
	 * @param  WC_Order_Item $item Order Item.
	 * @param  array         $args Arguments.
	 * @return string|void
	 */
function wc_display_item_downloads( $item, $args = array() ) {
⋮----
$downloads = is_object( $item ) && $item->is_type( 'line_item' ) ? $item->get_item_downloads() : array();
⋮----
/* translators: %d: downloads count */
⋮----
function woocommerce_photoswipe() {
⋮----
/**
 * Outputs a list of product attributes for a product.
 *
 * @since  3.0.0
 * @param  WC_Product $product Product Object.
 */
function wc_display_product_attributes( $product ) {
⋮----
// Display weight and dimensions before attribute list.
$display_dimensions = apply_filters( 'wc_product_enable_dimensions_display', $product->has_weight() || $product->has_dimensions() );
if ( $display_dimensions && $product->has_weight() ) {
⋮----
'value' => wc_format_weight( $product->get_weight() ),
⋮----
if ( $display_dimensions && $product->has_dimensions() ) {
⋮----
'value' => wc_format_dimensions( $product->get_dimensions( false ) ),
⋮----
// Add product attributes to list.
$attributes = array_filter( $product->get_attributes(), 'wc_attributes_array_filter_visible' );
⋮----
if ( $attribute->is_taxonomy() ) {
$attribute_taxonomy = $attribute->get_taxonomy_object();
$attribute_values   = wc_get_product_terms( $product->get_id(), $attribute->get_name(), array( 'fields' => 'all' ) );
⋮----
$values[] = '<a href="' . esc_url( get_term_link( $attribute_value->term_id, $attribute->get_name() ) ) . '" rel="tag">' . $value_name . '</a>';
⋮----
$values = $attribute->get_options();
⋮----
$product_attributes[ 'attribute_' . sanitize_title_with_dashes( $attribute->get_name() ) ] = array(
'label' => wc_attribute_label( $attribute->get_name() ),
⋮----
/**
	 * Hook: woocommerce_display_product_attributes.
	 *
	 * @since 3.6.0.
	 * @param array $product_attributes Array of atributes to display; label, value.
	 * @param WC_Product $product Showing attributes for this product.
	 */
⋮----
// Legacy params.
⋮----
/**
 * Get HTML to show product stock.
 *
 * @since  3.0.0
 * @param  WC_Product $product Product Object.
 * @return string
 */
function wc_get_stock_html( $product ) {
⋮----
$availability = $product->get_availability();
⋮----
/**
 * Get HTML for ratings.
 *
 * @since  3.0.0
 * @param  float $rating Rating being shown.
 * @param  int   $count  Total number of ratings.
 * @return string
 */
function wc_get_rating_html( $rating, $count = 0 ) {
⋮----
/* translators: %s: rating */
⋮----
/**
 * Get HTML for star rating.
 *
 * @since  3.1.0
 * @param  float $rating Rating being shown.
 * @param  int   $count  Total number of ratings.
 * @return string
 */
function wc_get_star_rating_html( $rating, $count = 0 ) {
⋮----
/* translators: 1: rating 2: rating count */
⋮----
/**
 * Returns a 'from' prefix if you want to show where prices start at.
 *
 * @since  3.0.0
 * @return string
 */
function wc_get_price_html_from_text() {
⋮----
/**
 * Get logout endpoint.
 *
 * @since  2.6.9
 *
 * @param string $redirect Redirect URL.
 *
 * @return string
 */
function wc_logout_url( $redirect = '' ) {
⋮----
/**
 * Show notice if cart is empty.
 *
 * @since 3.1.0
 */
function wc_empty_cart_message() {
⋮----
/**
 * Disable search engines indexing core, dynamic, cart/checkout pages.
 *
 * @todo Deprecated this function after dropping support for WP 5.6.
 * @since 3.2.0
 */
function wc_page_noindex() {
// wp_no_robots is deprecated since WP 5.7.
⋮----
/**
 * Disable search engines indexing core, dynamic, cart/checkout pages.
 * Uses "wp_robots" filter introduced in WP 5.7.
 *
 * @since 5.0.0
 * @param array $robots Associative array of robots directives.
 * @return array Filtered robots directives.
 */
function wc_page_no_robots( $robots ) {
⋮----
/**
 * Get a slug identifying the current theme.
 *
 * @since 3.3.0
 * @return string
 */
function wc_get_theme_slug_for_templates() {
⋮----
/**
 * Gets and formats a list of cart item data + variations for display on the frontend.
 *
 * @since 3.3.0
 * @param array $cart_item Cart item object.
 * @param bool  $flat Should the data be returned flat or in a list.
 * @return string
 */
function wc_get_formatted_cart_item_data( $cart_item, $flat = false ) {
⋮----
// Variation values are shown only if they are not found in the title as of 3.0.
// This is because variation titles display the attributes.
if ( $cart_item['data']->is_type( 'variation' ) && is_array( $cart_item['variation'] ) ) {
⋮----
// If this is a term slug, get the term's nice name.
⋮----
// If this is a custom option slug, get the options name.
⋮----
// Check the nicename against the title.
if ( '' === $value || wc_is_attribute_in_product_name( $value, $cart_item['data']->get_name() ) ) {
⋮----
// Filter item data to allow 3rd parties to add more to the array.
⋮----
// Format item data ready to display.
⋮----
// Set hidden to true to not display meta on cart.
⋮----
// Output flat or in list format.
⋮----
/**
 * Gets the url to remove an item from the cart.
 *
 * @since 3.3.0
 * @param string $cart_item_key contains the id of the cart item.
 * @return string url to page
 */
function wc_get_cart_remove_url( $cart_item_key ) {
⋮----
/**
 * Gets the url to re-add an item into the cart.
 *
 * @since 3.3.0
 * @param  string $cart_item_key Cart item key to undo.
 * @return string url to page
 */
function wc_get_cart_undo_url( $cart_item_key ) {
⋮----
/**
 * Outputs all queued notices on WC pages.
 *
 * @since 3.5.0
 */
function woocommerce_output_all_notices() {
⋮----
/**
 * Products RSS Feed.
 *
 * @deprecated 2.6
 */
function wc_products_rss_feed() {
⋮----
/**
	 * Reset the loop's index and columns when we're done outputting a product loop.
	 *
	 * @deprecated 3.3
	 */
function woocommerce_reset_loop() {
⋮----
/**
	 * Output the reviews tab content.
	 *
	 * @deprecated 2.4.0 Unused.
	 */
function woocommerce_product_reviews_tab() {
⋮----
/**
 * Display pay buttons HTML.
 *
 * @since 3.9.0
 */
function wc_get_pay_buttons() {
⋮----
if ( $gateway->supports( 'pay_button' ) ) {
$supported_gateways[] = $gateway->get_pay_button_id();
⋮----
// phpcs:enable Generic.Commenting.Todo.TaskFound
```

## File: inc/woocommerce.php
```php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package kirgo
 */
/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)
 * @link https://github.com/woocommerce/woocommerce/wiki/Declaring-WooCommerce-support-in-themes
 *
 * @return void
 */
function kirgo_woocommerce_setup() {
⋮----
/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function kirgo_woocommerce_scripts() {
⋮----
$font_path   = WC()->plugin_url() . '/assets/fonts/';
⋮----
/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
⋮----
/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function kirgo_woocommerce_active_body_class( $classes ) {
⋮----
/**
 * Related Products Args.
 *
 * @param array $args related products args.
 * @return array $args related products args.
 */
function kirgo_woocommerce_related_products_args( $args ) {
⋮----
/**
 * Remove default WooCommerce wrapper.
 */
⋮----
/**
	 * Before Content.
	 *
	 * Wraps all WooCommerce content in wrappers which match the theme markup.
	 *
	 * @return void
	 */
function kirgo_woocommerce_wrapper_before() {
⋮----
/**
	 * After Content.
	 *
	 * Closes the wrapping divs.
	 *
	 * @return void
	 */
function kirgo_woocommerce_wrapper_after() {
⋮----
/**
 * Sample implementation of the WooCommerce Mini Cart.
 *
 * You can add the WooCommerce Mini Cart to header.php like so ...
 *
	<?php
		if ( function_exists( 'kirgo_woocommerce_header_cart' ) ) {
			kirgo_woocommerce_header_cart();
		}
	?>
 */
⋮----
/**
	 * Cart Fragments.
	 *
	 * Ensure cart contents update when products are added to the cart via AJAX.
	 *
	 * @param array $fragments Fragments to refresh via AJAX.
	 * @return array Fragments to refresh via AJAX.
	 */
function kirgo_woocommerce_cart_link_fragment( $fragments ) {
⋮----
/**
	 * Cart Link.
	 *
	 * Displayed a link to the cart including the number of items present and the cart total.
	 *
	 * @return void
	 */
function kirgo_woocommerce_cart_link() {
⋮----
/* translators: number of items in the mini cart. */
_n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'kirgo' ),
WC()->cart->get_cart_contents_count()
⋮----
<span class="amount"><?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?></span> <span class="count"><?php echo esc_html( $item_count_text ); ?></span>
⋮----
/**
	 * Display Header Cart.
	 *
	 * @return void
	 */
function kirgo_woocommerce_header_cart() {
```

## File: languages/kirgo.pot
```
# Copyright (C) 2020 Automattic
# This file is distributed under the GNU General Public License v2 or later.
msgid ""
msgstr ""
"Project-Id-Version: _s 1.0.0\n"
"Report-Msgid-Bugs-To: https://wordpress.org/support/theme/_s\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2020-04-17T21:03:15+00:00\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"X-Generator: WP-CLI 2.4.0\n"
"X-Domain: _s\n"

#. Theme Name of the theme
msgid "_s"
msgstr ""

#. Theme URI of the theme
msgid "https://underscores.me/"
msgstr ""

#. Description of the theme
msgid "Hi. I'm a starter theme called <code>_s</code>, or <em>underscores</em>, if you like. I'm a theme meant for hacking so don't use me as a <em>Parent Theme</em>. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for."
msgstr ""

#. Author of the theme
msgid "Automattic"
msgstr ""

#. Author URI of the theme
msgid "https://automattic.com/"
msgstr ""

#: 404.php:18
msgid "Oops! That page can&rsquo;t be found."
msgstr ""

#: 404.php:22
msgid "It looks like nothing was found at this location. Maybe try one of the links below or a search?"
msgstr ""

#: 404.php:31
msgid "Most Used Categories"
msgstr ""

#. translators: %1$s: smiley
#: 404.php:49
msgid "Try looking in the monthly archives. %1$s"
msgstr ""

#. translators: 1: title.
#: comments.php:35
msgid "One thought on &ldquo;%1$s&rdquo;"
msgstr ""

#. translators: 1: comment count number, 2: title.
#: comments.php:41
msgctxt "comments title"
msgid "%1$s thought on &ldquo;%2$s&rdquo;"
msgid_plural "%1$s thoughts on &ldquo;%2$s&rdquo;"
msgstr[0] ""
msgstr[1] ""

#: comments.php:68
msgid "Comments are closed."
msgstr ""

#: footer.php:18
msgid "https://wordpress.org/"
msgstr ""

#. translators: %s: CMS name, i.e. WordPress.
#: footer.php:21
msgid "Proudly powered by %s"
msgstr ""

#. translators: 1: Theme name, 2: Theme author.
#: footer.php:27
msgid "Theme: %1$s by %2$s."
msgstr ""

#: functions.php:53
msgid "Primary"
msgstr ""

#: functions.php:130
msgid "Sidebar"
msgstr ""

#: functions.php:132
msgid "Add widgets here."
msgstr ""

#: header.php:26
msgid "Skip to content"
msgstr ""

#: header.php:49
msgid "Primary Menu"
msgstr ""

#. translators: %s: post date.
#: inc/template-tags.php:30
msgctxt "post date"
msgid "Posted on %s"
msgstr ""

#. translators: %s: post author.
#: inc/template-tags.php:46
msgctxt "post author"
msgid "by %s"
msgstr ""

#. translators: used between list items, there is a space after the comma
#: inc/template-tags.php:63
msgid ", "
msgstr ""

#. translators: 1: list of categories.
#: inc/template-tags.php:66
msgid "Posted in %1$s"
msgstr ""

#. translators: used between list items, there is a space after the comma
#: inc/template-tags.php:70
msgctxt "list item separator"
msgid ", "
msgstr ""

#. translators: 1: list of tags.
#: inc/template-tags.php:73
msgid "Tagged %1$s"
msgstr ""

#. translators: %s: post title
#: inc/template-tags.php:83
msgid "Leave a Comment<span class=\"screen-reader-text\"> on %s</span>"
msgstr ""

#. translators: %s: Name of current post. Only visible to screen readers
#: inc/template-tags.php:100
#: template-parts/content-page.php:39
msgid "Edit <span class=\"screen-reader-text\">%s</span>"
msgstr ""

#: inc/woocommerce.php:186
msgid "View your shopping cart"
msgstr ""

#. translators: number of items in the mini cart.
#: inc/woocommerce.php:190
msgid "%d item"
msgid_plural "%d items"
msgstr[0] ""
msgstr[1] ""

#. translators: %s: search query.
#: search.php:22
msgid "Search Results for: %s"
msgstr ""

#: single.php:23
msgid "Previous:"
msgstr ""

#: single.php:24
msgid "Next:"
msgstr ""

#: template-parts/content-none.php:14
msgid "Nothing Found"
msgstr ""

#. translators: 1: link to WP admin new post page.
#: template-parts/content-none.php:24
msgid "Ready to publish your first post? <a href=\"%1$s\">Get started here</a>."
msgstr ""

#: template-parts/content-none.php:37
msgid "Sorry, but nothing matched your search terms. Please try again with some different keywords."
msgstr ""

#: template-parts/content-none.php:44
msgid "It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help."
msgstr ""

#: template-parts/content-page.php:25
#: template-parts/content.php:53
msgid "Pages:"
msgstr ""

#. translators: %s: Name of current post. Only visible to screen readers
#: template-parts/content.php:40
msgid "Continue reading<span class=\"screen-reader-text\"> \"%s\"</span>"
msgstr ""
```

## File: languages/readme.txt
```
Place your theme language files in this directory.

Please visit the following links to learn more about translating WordPress themes:

https://make.wordpress.org/polyglots/teams/
https://developer.wordpress.org/themes/functionality/localization/
https://developer.wordpress.org/reference/functions/load_theme_textdomain/
```

## File: template-parts/template-blog.php
```php
<?php /* Template Name: Blog */ ?>
```

## File: template-parts/template-cart.php
```php
<?php /* Template Name: Cart */ ?>
```

## File: template-parts/template-checkout.php
```php
<?php /* Template Name: Checkout */ ?>
```

## File: template-parts/template-get-in-touch.php
```php
<?php /* Template Name: Get In Touch */ ?>
```

## File: templates/easy-login-woocommerce/xoo-el-form.php
```php
/**
 * The template is a form container
 *
 * This template can be overridden by copying it to yourtheme/templates/easy-login-woocommerce/xoo-el-form.php.
 *
 * HOWEVER, on occasion we will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen.
 * @see     https://docs.xootix.com/easy-login-woocommerce/
 * @version 4.1
 */
⋮----
exit; // Exit if accessed directly
⋮----
<?php xoo_el_helper()->get_template( 'global/xoo-el-header.php', array( 'args' => $args ) ); ?>
⋮----
<?php xoo_el_helper()->get_template( 'global/xoo-el-'.$form.'-section.php', array( 'args' => $args ) ); ?>
```

## File: templates/easy-login-woocommerce/xoo-el-popup.php
```php
/**
 * The template is for popup design
 *
 * This template can be overridden by copying it to yourtheme/templates/easy-login-woocommerce/xoo-el-popup.php.
 *
 * HOWEVER, on occasion we will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen.
 * @see     https://docs.xootix.com/easy-login-woocommerce/
 * @version 2.1
 */
⋮----
exit; // Exit if accessed directly
```

## File: templates/easy-login-woocommerce/xoo-el-register-section.php
```php
/**
 * Registration Form
 *
 * This template can be overridden by copying it to yourtheme/templates/easy-login-woocommerce/global/xoo-el-register-section.php
 *
 * HOWEVER, on occasion we will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen.
 * @see     https://docs.xootix.com/easy-login-woocommerce/
 * @version 2.1
 */
⋮----
exit; // Exit if accessed directly
⋮----
$redirect 	= xoo_el_helper()->get_general_option( 'm-red-register' );
⋮----
<?php xoo_el()->aff->fields->get_fields_layout(); ?>
```

## File: woocommerce/emails/customer-processing-order.php
```php
/**
 * Customer processing order email
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/customer-processing-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates\Emails
 * @version 3.7.0
 */
⋮----
/*
 * @hooked WC_Emails::email_header() Output the email header
 */
⋮----
// fetched icons
⋮----
// Fetched order number and date of the order
$order_number = $order->get_order_number();
$order_date = $order->get_date_created()->format( 'F j, Y' );
⋮----
<?php /* translators: %s: Customer first name */ ?>
<p><?php printf( esc_html__( 'Hi %s,', 'woocommerce' ), esc_html( $order->get_billing_first_name() ) ); ?></p>
<?php /* translators: %s: Order number */ ?>
<p><?php printf( esc_html__( 'Just to let you know — we\'ve received your order #%s, and it is now being processed:', 'woocommerce' ), esc_html( $order->get_order_number() ) ); ?></p>
⋮----
/*
    * @hooked WC_Emails::order_details() Shows the order details table.
    * @hooked WC_Structured_Data::generate_order_data() Generates structured data.
    * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.
    * @since 2.5.0
    */
⋮----
/*
    * @hooked WC_Emails::order_meta() Shows order meta data.
    */
⋮----
/*
    * @hooked WC_Emails::customer_details() Shows customer details
    * @hooked WC_Emails::email_address() Shows email address
    */
⋮----
/**
     * Show user-defined additional content - this is set in each email's settings.
    */
// if ( $additional_content ) {
// 	echo wp_kses_post( wpautop( wptexturize( $additional_content ) ) );
// }
⋮----
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
```

## File: woocommerce/myaccount/dashboard.php
```php
/**
 * Duplicated My Account Dashboard
 */
⋮----
exit; // Exit if accessed directly.
⋮----
/**
	 * My Account dashboard.
	 *
	 * @since 2.6.0
	 */
⋮----
/**
	 * Deprecated woocommerce_before_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
⋮----
/**
	 * Deprecated woocommerce_after_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
⋮----
/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
```

## File: woocommerce/content-product.php
```php
/**
 * The template for displaying product content within loops
 *
 * This template is overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */
⋮----
// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
⋮----
$product_price = $product->get_price();
$product_id = $product->get_id();
⋮----
// Get the product tags
⋮----
// Check if tags exist
⋮----
/**
		 * Hook: woocommerce_before_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_open - 10
		 */
⋮----
/**
		 * Hook: woocommerce_before_shop_loop_item_title.
		 *
		 * @hooked woocommerce_show_product_loop_sale_flash - 10
		 * @hooked woocommerce_template_loop_product_thumbnail - 10
		 */
⋮----
// Get the product gallery images
$gallery_images = $product->get_gallery_image_ids();
$image_ids = array_merge(array($product->get_image_id()), $gallery_images);
⋮----
<?php $product_permalink = $product->get_permalink(); ?>
⋮----
/**
				 * Hook: woocommerce_shop_loop_item_title.
				 *
				 * @hooked woocommerce_template_loop_product_title - 10
				 */
⋮----
/**
				 * Hook: woocommerce_after_shop_loop_item_title.
				 *
				 * @hooked woocommerce_template_loop_rating - 5
				 * @hooked woocommerce_template_loop_price - 10
				 */
⋮----
/**
				 * Hook: woocommerce_after_shop_loop_item.
				 *
				 * @hooked woocommerce_template_loop_product_link_close - 5
				 * @hooked woocommerce_template_loop_add_to_cart - 10
				 */
```

## File: 404.php
```php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package kirgo
 */
⋮----
/* translators: %1$s: smiley */
```

## File: archive.php
```php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
/* Start the Loop */
⋮----
/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
```

## File: comments.php
```php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
⋮----
// You can start editing here -- including this comment!
⋮----
/* translators: 1: title. */
⋮----
/* translators: 1: comment count number, 2: title. */
⋮----
number_format_i18n( $kirgo_comment_count ), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
⋮----
// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) :
⋮----
endif; // Check for have_comments().
```

## File: page.php
```php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
// If comments are open or we have at least one comment, load up the comment template.
⋮----
endwhile; // End of the loop.
```

## File: search.php
```php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package kirgo
 */
⋮----
/* translators: %s: search query. */
⋮----
/* Start the Loop */
⋮----
/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
```

## File: sidebar.php
```php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kirgo
 */
```

## File: single.php
```php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package kirgo
 */
⋮----
// If comments are open or we have at least one comment, load up the comment template.
⋮----
endwhile; // End of the loop.
```

## File: assets/sass/helpers/_assets.scss
```scss
/// Base path for assets (fonts, images...),
/// should not include trailing slash
/// @access public
/// @type String
$asset-base-path: "/wp-content/themes/kirgo-theme/assets/assets" !default;
/// Asset URL builder
/// @access private
/// @param {String} $type - Asset type, matching folder name
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the asset
@function asset($type, $file) {
    @return url($asset-base-path + "/" + $type + "/" + $file);
}
/// Image asset helper
/// @access public
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the image
/// @require {function} asset
@function image($file) {
    @return asset("images", $file);
}
/// Font asset helper
/// @access public
/// @param {String} $file - Asset file name, including extension
/// @return {URL} - A `url()` function leading to the font
/// @require {function} asset
@function font($file) {
    @return asset("fonts", $file);
}
```

## File: template-parts/woocommerce/content-product-cards.php
```php
/**
 * Product Cards Template
 */
⋮----
// Fetching product details dynamically
⋮----
$sports_bra_name = $sports_bra->get_name();
$leggings_name = $leggings->get_name();
$sports_bra_short_desc = $sports_bra->get_short_description();
$leggings_short_desc = $leggings->get_short_description();
$sports_bra_price = $sports_bra->get_price();
$leggings_price = $leggings->get_price();
$sports_bra_image = $sports_bra->get_image();
$leggings_image = $leggings->get_image();
// Get Add to Cart URL
$sports_bra_cart_url = $sports_bra->add_to_cart_url();
$leggings_cart_url = $leggings->add_to_cart_url();
⋮----
// Get first gallery image
⋮----
$summer_sports_bra_name = $summer_sports_bra->get_name();
$summer_leggings_name = $summer_leggings->get_name();
$summer_sports_bra_short_desc = $summer_sports_bra->get_short_description();
$summer_leggings_short_desc = $summer_leggings->get_short_description();
$summer_sports_bra_price = $summer_sports_bra->get_price();
$summer_leggings_price = $summer_leggings->get_price();
$summer_sports_bra_image = $summer_sports_bra->get_image();
$summer_leggings_image = $summer_leggings->get_image();
⋮----
$summer_sports_bra_cart_url = $summer_sports_bra->add_to_cart_url();
$summer_leggings_cart_url = $summer_leggings->add_to_cart_url();
```

## File: templates/easy-login-woocommerce/xoo-el-login-section.php
```php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/templates/easy-login-woocommerce/global/xoo-el-login-section.php
 *
 * HOWEVER, on occasion we will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen.
 * @see     https://docs.xootix.com/easy-login-woocommerce/
 * @version 2.1
 */
⋮----
exit; // Exit if accessed directly
⋮----
$redirect 	= xoo_el_helper()->get_general_option( 'm-red-login' );
⋮----
xoo_el()->aff->fields->get_input_html( $field_id, $field_args );
```

## File: woocommerce/loop/loop-end.php
```php
/**
 * Product Loop End
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/loop-end.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     2.0.0
 */
```

## File: woocommerce.css
```css
/*
Theme Name: kirgo
WooCommerce styles override
*/
/**
 * Shop tables
 */
table.shop_table_responsive thead {
table.shop_table_responsive tbody th {
table.shop_table_responsive tr td {
table.shop_table_responsive tr td::before {
table.shop_table_responsive tr td.product-remove a {
table.shop_table_responsive tr td.product-remove::before {
table.shop_table_responsive tr td.actions::before,
table.shop_table_responsive tr td.download-actions .button {
⋮----
table.shop_table_responsive tr th,
⋮----
/**
 * Products
 */
ul.products {
ul.products li.product {
ul.products li.product img {
ul.products li.product .button {
⋮----
ul.products li.product.first {
ul.products li.product.last {
ul.products.columns-1 li.product {
ul.products.columns-2 li.product {
ul.products.columns-3 li.product {
ul.products.columns-4 li.product {
ul.products.columns-5 li.product {
ul.products.columns-6 li.product {
⋮----
/**
 * Single product
 */
.single-product div.product {
.single-product div.product .woocommerce-product-gallery {
.single-product div.product .woocommerce-product-gallery .woocommerce-product-gallery__trigger {
.single-product div.product .woocommerce-product-gallery .flex-viewport {
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs {
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs li {
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs li img {
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs li img.flex-active {
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs li:hover img {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-2 .flex-control-thumbs li {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-2 .flex-control-thumbs li:nth-child(2n) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-2 .flex-control-thumbs li:nth-child(2n+1) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-3 .flex-control-thumbs li {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-3 .flex-control-thumbs li:nth-child(3n) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-3 .flex-control-thumbs li:nth-child(3n+1) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-4 .flex-control-thumbs li {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-4 .flex-control-thumbs li:nth-child(4n) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-4 .flex-control-thumbs li:nth-child(4n+1) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-5 .flex-control-thumbs li {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-5 .flex-control-thumbs li:nth-child(5n) {
.single-product div.product .woocommerce-product-gallery.woocommerce-product-gallery--columns-5 .flex-control-thumbs li:nth-child(5n+1) {
.stock:empty::before {
.stock.in-stock {
.stock.out-of-stock {
/**
 * Checkout
 */
⋮----
.col2-set .form-row-first {
.col2-set .form-row-last {
.col2-set .form-row-first,
⋮----
/**
 * General WooCommerce components
 */
/**
 * Header cart
 */
.site-header-cart {
.site-header-cart .cart-contents {
.site-header-cart .widget_shopping_cart {
.site-header-cart .product_list_widget {
/**
 * Star rating
 */
.star-rating {
.star-rating::before {
.star-rating span {
.star-rating span::before {
p.stars a {
p.stars a::before {
p.stars a:hover ~ a::before {
p.stars:hover a::before {
p.stars.selected a.active::before {
p.stars.selected a.active ~ a::before {
p.stars.selected a:not(.active)::before {
/**
 * Tabs
 */
.woocommerce-tabs ul.tabs {
.woocommerce-tabs ul.tabs li {
.woocommerce-tabs ul.tabs li a {
.woocommerce-tabs .panel h2:first-of-type {
/**
 * Password strength meter
 */
.woocommerce-password-strength {
.woocommerce-password-strength.strong {
.woocommerce-password-strength.short {
.woocommerce-password-strength.bad {
.woocommerce-password-strength.good {
/**
 * Forms
 */
.form-row.woocommerce-validated input.input-text {
.form-row.woocommerce-invalid input.input-text {
.required {
/**
 * Notices
 */
.woocommerce-message,
.woocommerce-info,
.woocommerce-error {
.demo_store {
⋮----
/**
	 * Header cart
	 */
⋮----
.site-header-cart:hover .widget_shopping_cart,
⋮----
/**
 * WooCommerce widgets
 */
/**
 * WooCommerce Price Filter
 */
.widget_price_filter .price_slider {
.widget_price_filter .price_slider_amount {
.widget_price_filter .price_slider_amount .button {
.widget_price_filter .ui-slider {
.widget_price_filter .ui-slider .ui-slider-handle {
.widget_price_filter .ui-slider .ui-slider-handle:last-child {
.widget_price_filter .ui-slider .ui-slider-handle:hover,
.widget_price_filter .ui-slider .ui-slider-range {
.widget_price_filter .price_slider_wrapper .ui-widget-content {
.widget_price_filter .ui-slider-horizontal {
.widget_price_filter .ui-slider-horizontal .ui-slider-range {
```

## File: assets/sass/components/buttons.scss
```scss
.btn {
    width: 100%;
    padding: 0.7rem 0;
    border-radius: 4.7px;
    &-light {
    }
    &-dark {
        background-color: #0d0c0c;
    }
}
```

## File: assets/sass/_helpers.scss
```scss
@import "helpers/main";
// To enable support for browsers that do not support @media queries,
// (IE <= 8, Firefox <= 3, Opera <= 9) set $mq-responsive to false
// Create a separate stylesheet served exclusively to these browsers,
// meaning @media queries will be rasterized, relying on the cascade itself
$mq-responsive: true;
// Name your breakpoints in a way that creates a ubiquitous language
// across team members. It will improve communication between
// stakeholders, designers, developers, and testers.
$mq-breakpoints: (
    mobile-sm: 320px,
    mobile: 400px,
    mobile-md: 550px,
    mobile-lg: 650px,
    tablet: 740px,
    tablet-md: 980px,
    desktop: 1024px,
    desktop-md: 1200px,
    desktop-lg: 1350px,
    desktop-xl: 1600px,
    // Tweakpoints
    desktopAd: 810px,
    mobileLandscape: 480px,
);
// Define the breakpoint from the $mq-breakpoints list that should
// be used as the target width when outputting a static stylesheet
// (when $mq-responsive is set to 'false').
$mq-static-breakpoint: desktop;
// If you want to display the currently active breakpoint in the top
// right corner of your site during development, add the breakpoints
// to this list, ordered by width. For example: (mobile, tablet, desktop).
$mq-show-breakpoints: (mobile, mobileLandscape, tablet, desktop);
@import "helpers/mq";
@import "helpers/assets";
@import "helpers/assets";
@import "helpers/easings";
@import "helpers/typo";
```

## File: template-parts/content-none.php
```php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
/* translators: 1: link to WP admin new post page. */
```

## File: template-parts/content-page.php
```php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
/* translators: %s: Name of current post. Only visible to screen readers */
```

## File: template-parts/content-search.php
```php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
```

## File: template-parts/template-my-account.php
```php
<?php /* Template Name: My Account */ ?>
```

## File: template-parts/template-registration.php
```php
/*
   * Template name: Registration Form
   */
⋮----
value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
⋮----
value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
```

## File: woocommerce/myaccount/form-login.php
```php
/**
 * Overwritten Login Form
 */
⋮----
exit; // Exit if accessed directly.
⋮----
<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
```

## File: woocommerce/single-product/product-image.php
```php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.1
 */
⋮----
// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
⋮----
$post_thumbnail_id = $product->get_image_id();
⋮----
echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped
```

## File: footer.php
```php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kirgo
 */
```

## File: assets/sass/pages/checkout.scss
```scss
.woocommerce {
    h2,
    h3 {
        text-transform: lowercase;
    }
    a {
        color: #fff;
    }
    .woocommerce-form-coupon-toggle {
        display: none;
    }
    .woocommerce-checkout,
    .woocommerce-order {
        font-family: $lekton;
        padding: 0 2rem;
        margin-top: 80px;
        #place_order:disabled {
            @include mq($from: desktop) {
                position: relative;
                margin: 4rem 0 0;
            }
            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: hwb(0deg 0% 100% / 50%);
            }
        }
    }
    .woocommerce-checkout {
        @include mq($from: desktop) {
            padding: 0;
            margin-top: 0;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        #customer_details {
            @include mq($from: desktop) {
                flex-basis: 60%;
                min-height: 100vh;
                padding: 0 5rem;
                .woocommerce-billing-fields {
                    margin-top: 12rem;
                    &::before {
                        position: absolute;
                        content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/prev-arrow.svg");
                        left: 3rem;
                        top: 6rem;
                        transform: scale(0.6);
                    }
                    &::after {
                        position: absolute;
                        content: "checkout";
                        font-family: $blaak-black-regular;
                        font-size: 42px;
                        font-weight: 700;
                        top: 5rem;
                        left: 5rem;
                    }
                }
            }
        }
        #order_review {
            @include mq($from: desktop) {
                flex-basis: 40%;
                padding: 7rem 0 3rem;
                background-color: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            & > * {
                @include mq($from: desktop) {
                    max-width: 400px;
                }
                @include mq($from: desktop-xl) {
                    max-width: 460px;
                }
            }
            .woocommerce-privacy-policy-text {
                a {
                    color: #fff;
                }
            }
        }
    }
    #customer_details {
        .col-2 {
            @include mq($from: desktop) {
                margin-bottom: 4rem;
            }
        }
        .col-1,
        .col-2 {
            width: 100%;
            #ship-to-different-address-checkbox {
                & + span {
                    font-family: $blaak-black-regular;
                    font-size: 16px;
                    font-weight: 900;
                    color: #fff;
                    text-transform: lowercase;
                    @include mq($from: desktop) {
                        font-size: 21px;
                    }
                }
            }
            .woocommerce-billing-fields {
                h3 {
                    font-family: $blaak-black-regular;
                    font-size: 21.3px;
                    font-weight: 900;
                    line-height: 20px;
                    text-align: center;
                    color: #bbcea8;
                    text-transform: lowercase;
                    position: relative;
                    margin: 7rem 0 2rem;
                    @include mq($from: desktop) {
                        text-align: left;
                    }
                    &::before {
                        content: "enter your";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: -1.5rem;
                        left: 0;
                        right: 0;
                        color: #fff;
                    }
                }
            }
            .woocommerce-billing-fields__field-wrapper,
            .woocommerce-shipping-fields__field-wrapper {
                display: flex;
                flex-direction: column;
                @include mq($from: desktop) {
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                & > * {
                    @include mq($from: desktop) {
                        width: 45%;
                    }
                }
                #billing_first_name_field {
                    width: 100%;
                    order: 1;
                    @include mq($from: desktop) {
                        width: 45%;
                    }
                }
                #billing_last_name_field {
                    width: 100%;
                    order: 2;
                    @include mq($from: desktop) {
                        width: 45%;
                    }
                }
                #billing_phone_field {
                    order: 3;
                }
                #billing_email_field {
                    order: 4;
                }
                #billing_company_field {
                    order: 5;
                }
                #shipment-text {
                    order: 6;
                }
                #billing_address_1_field {
                    order: 7;
                }
                #billing_address_2_field {
                    order: 8;
                }
                #billing_city_field {
                    order: 9;
                }
                #billing_state_field {
                    order: 10;
                }
                #billing_postcode_field {
                    order: 11;
                }
                #billing_country_field {
                    order: 12;
                }
                #shipment-text {
                    font-family: $blaak-black-regular;
                    font-size: 21.3px;
                    font-weight: 900;
                    line-height: 20px;
                    text-align: center;
                    color: #fff;
                    margin: 1rem 0 2rem;
                    @include mq($from: desktop) {
                        width: 100%;
                        text-align: left;
                    }
                    span {
                        color: #bbcea8;
                    }
                }
                input.input-text {
                    flex-grow: 0;
                    -webkit-backdrop-filter: blur(4.9px);
                    backdrop-filter: blur(4.9px);
                    border: solid 0.3px rgb(255 255 255 / 60%);
                    background-color: rgba(255, 255, 255, 0);
                    width: 100%;
                    padding: 1rem;
                    line-height: 1;
                    border-radius: 6px;
                    font-family: $lekton;
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: -0.14px;
                    text-align: left;
                    color: #fff;
                    text-transform: lowercase;
                }
                #billing_country_field label,
                #billing_address_1_field label,
                #billing_state_field label,
                #shipping_country_field label,
                #shipping_address_1_field label,
                #shipping_state_field label {
                    display: none;
                }
                #billing_country_field,
                #billing_state_field,
                #shipping_country_field,
                #shipping_state_field {
                    .selection {
                        .select2-selection {
                            backdrop-filter: blur(4.9px);
                            border: solid 0.3px rgb(255 255 255 / 60%);
                            background-color: rgba(255, 255, 255, 0);
                            width: 100%;
                            padding: 1rem;
                            border-radius: 6px;
                            font-family: "Lekton";
                            font-size: 14px;
                            font-weight: bold;
                            letter-spacing: -0.14px;
                            text-align: left;
                            color: #fff;
                            height: unset;
                            .select2-selection__rendered {
                                line-height: 1;
                                color: #fff;
                            }
                            .select2-selection__arrow {
                                top: 0;
                                bottom: 0;
                                margin: auto;
                            }
                        }
                    }
                }
            }
        }
        .col-2 {
            width: 100%;
            .woocommerce-additional-fields {
                display: none;
            }
        }
    }
    #order_review_heading,
    .woocommerce-order-details__title {
        margin: 2rem auto 1rem;
        width: 90%;
        font-family: $blaak-black-regular;
        font-size: 21.3px;
        font-weight: 900;
        line-height: 20px;
        color: #fff;
    }
    #order_review,
    .woocommerce-order-details {
        .shop_table.woocommerce-checkout-review-order-table,
        .shop_table.order_details {
            width: 90%;
            margin: 0 auto 2rem;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding: 0.75rem 0;
            display: flex;
            flex-direction: column;
            .product-name,
            .product-name dt,
            .product-name strong,
            .cart-subtotal th,
            .order-total th,
            .woocommerce-shipping-totals th {
                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                font-family: $lekton;
                font-size: 16px;
                line-height: 19.2px;
                letter-spacing: 0.21px;
                font-weight: normal;
                text-align: left;
                color: #7b7b7b;
                .wc-item-meta {
                    padding: 0;
                    margin: 0.5rem 0;
                    list-style-type: none;
                    height: 14px;
                    li {
                        display: flex;
                        .wc-item-meta-label {
                            margin-right: 10px;
                        }
                    }
                }
            }
            tr {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 0.75rem;
                #shipping_method {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
            }
            tfoot {
                // .cart-subtotal {
                //     padding-bottom: 0.75rem;
                // }
                .order-total {
                    border-top: 1px solid #fff;
                    padding-top: 10px;
                    margin-top: 0.75rem;
                }
            }
            .product-name {
                dl.variation {
                    display: flex;
                    margin: 0;
                    height: 20px;
                    dt.variation-Size {
                        margin-right: 5px;
                    }
                }
            }
        }
        #payment {
            .wc_payment_methods {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            .form-row.place-order {
                #place_order {
                    display: none;
                }
            }
        }
    }
    .woocommerce-customer-details {
        .woocommerce-column__title {
            font-family: $blaak-black-regular;
            font-size: 18px;
        }
        .woocommerce-columns {
            .woocommerce-column {
                width: 100%;
            }
        }
    }
    .woocommerce-order-overview.order_details {
        padding: 0;
        list-style-type: none;
        li {
            font-size: 16px;
            display: flex;
            justify-content: space-between;
        }
    }
    .woocommerce-thankyou-order-received {
        font-family: $blaak-black-regular;
        font-size: 16px;
        font-weight: 700;
        text-transform: lowercase;
    }
    @include mq($from: desktop) {
        .woocommerce-order {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0;
            padding: 0;
            .woocommerce-desktop-col-left {
                flex-basis: 60%;
                min-height: 100vh;
                padding: 7rem 4rem 0;
                .woocommerce-thankyou-order-received {
                    font-size: 22px;
                }
                .woocommerce-order-overview.order_details {
                    max-width: 500px;
                }
                & > p {
                    font-family: $blaak-black-regular;
                    font-size: 18px;
                    text-transform: lowercase;
                }
            }
            .woocommerce-desktop-col-right {
                flex-basis: 40%;
                background-color: #000;
                padding: 7rem 0 0;
                display: flex;
                align-items: center;
                flex-direction: column;
                .woocommerce-order-details {
                    width: 400px;
                    margin: 0 auto 1rem;
                    .woocommerce-order-details__title {
                        margin: 0 0 1rem;
                    }
                    .shop_table.order_details {
                        width: 100%;
                        tr {
                            td {
                                a {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
                .woocommerce-customer-details {
                    width: 400px;
                    .woocommerce-column__title {
                        font-family: $blaak-black-regular;
                        font-size: 22px;
                    }
                    .woocommerce-columns {
                        .woocommerce-column {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
.select2-container.select2-container--default {
    .select2-dropdown {
        color: #fff;
        font-family: "Lekton";
        background-color: #000;
    }
}
#place_order {
    font-family: $blaak-black-regular;
    font-size: 12.1px;
    font-weight: 900;
    line-height: 11.4px;
    text-align: center;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border-radius: 6px;
    margin: 2rem 0;
    width: 100%;
    // position: -webkit-sticky;
    position: sticky;
    bottom: 2rem;
    text-transform: lowercase;
    border: 1px solid #fff;
    transition: all 0.1s ease-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
    @include mq($from: desktop) {
        position: unset;
        max-width: 400px;
        width: -webkit-fill-available;
        margin: 2rem 0 0;
        flex-basis: unset;
        font-size: 17px;
    }
}
.woocommerce-checkout.woocommerce-order-pay {
    .woocommerce {
        padding: 6rem 2rem 0 2rem;
        @include mq($from: desktop) {
            padding: 7rem 0 0 4rem;
        }
        .order_details {
            font-family: $lekton;
            font-size: 16px;
            padding: 0;
            list-style-type: none;
            @include mq($from: desktop) {
                max-width: 500px;
                font-size: 18px;
            }
            li {
                display: flex;
                justify-content: space-between;
            }
            li.method strong {
                text-align: right;
            }
        }
    }
}
.woocommerce-checkout {
    .footer-section {
        display: none;
    }
}
```

## File: assets/sass/pages/my-account.scss
```scss
.woocommerce-account.logged-in {
    .woocommerce {
        margin-top: 0;
        background-color: #0d0c0c;
        color: #fff;
        // height: calc(100vh - 180px);
        @include mq($from: desktop) {
            display: flex;
            justify-content: space-between;
            padding: 0;
            margin: 0;
        }
        .woocommerce-MyAccount-navigation {
            @include mq($from: desktop) {
                flex-basis: 60%;
                min-height: 100vh;
            }
            ul {
                padding: 0;
                margin: 0 0 2rem 0rem;
                display: flex;
                flex-direction: column;
                @include mq($from: desktop) {
                    margin: 7rem auto 0 0;
                    margin-left: 20%;
                }
                li.woocommerce-MyAccount-navigation-link--dashboard,
                li.woocommerce-MyAccount-navigation-link--downloads {
                    display: none;
                }
                li.woocommerce-MyAccount-navigation-link {
                    list-style-type: none;
                    margin: 1rem 0 0rem 0;
                    text-transform: lowercase;
                    background-color: #fff;
                    padding: 1rem 0;
                    padding-left: 1rem;
                    border-radius: 10px;
                    a {
                        text-decoration: none;
                        font-family: $blaak-black-regular;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 21.3333px;
                        line-height: 1.5;
                        color: #000;
                        @include mq($from: desktop) {
                            font-size: 24px;
                        }
                        &:hover {
                            color: #000;
                        }
                    }
                }
                li.woocommerce-MyAccount-navigation-link.is-active {
                    a {
                        border-bottom: 5px solid #000;
                        color: #000;
                    }
                }
                li.woocommerce-MyAccount-navigation-link--customer-logout {
                    display: none;
                }
                .woocommerce-MyAccount-navigation-link--dashboard.is-active
                    ~ .woocommerce-MyAccount-navigation-link--customer-logout {
                    opacity: 0.5;
                    display: block;
                }
            }
        }
        .woocommerce-MyAccount-content {
            @include mq($from: desktop) {
                flex-basis: 40%;
                margin-top: 0;
                padding: 7rem 0 3rem;
                background-color: #000;
            }
        }
        a {
            color: #fff;
        }
        .woocommerce-form-row,
        .woocommerce-address-fields__field-wrapper {
            label {
                display: none;
            }
            input {
                -webkit-backdrop-filter: blur(4.9px);
                backdrop-filter: blur(4.9px);
                border: solid 0.3px rgba(255, 255, 255, 0.6);
                background-color: rgba(255, 255, 255, 0);
                width: 100%;
                padding: 1rem;
                line-height: 1;
                border-radius: 6px;
                font-family: $lekton;
                font-size: 14px;
                font-weight: bold;
                letter-spacing: -0.14px;
                text-align: left;
                color: #fff;
                text-transform: lowercase;
                @include mq($from: desktop) {
                    font-size: 18px;
                }
            }
            .select2-selection {
                backdrop-filter: blur(4.9px);
                border: solid 0.3px rgb(255 255 255 / 60%);
                background-color: rgba(255, 255, 255, 0);
                width: 100%;
                padding: 1rem;
                border-radius: 6px;
                font-family: "Lekton";
                font-size: 14px;
                font-weight: bold;
                letter-spacing: -0.14px;
                text-align: left;
                color: #fff;
                height: unset;
                @include mq($from: desktop) {
                    font-size: 18px;
                }
                .select2-selection__rendered {
                    line-height: 1;
                    color: #fff;
                }
                .select2-selection__arrow {
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }
        }
        .woocommerce-Button.button,
        .button.wp-element-button {
            font-family: $blaak-black-regular;
            font-size: 12.1px;
            font-weight: 900;
            line-height: 11.4px;
            text-align: center;
            color: #000;
            text-decoration: none;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 0;
            border-radius: 6px;
            margin: 0 0 1rem;
            width: 100%;
            text-transform: lowercase;
            border: 1px solid #fff;
            transition: all 0.1s ease-out;
            &:hover {
                background-color: #000;
                color: #fff;
            }
            @include mq($from: desktop) {
                font-size: 14px;
            }
        }
    }
    .account-social-link {
        display: flex;
        position: absolute;
        left: 0;
        bottom: 2rem;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        @include mq($from: desktop) {
            left: unset;
            right: 0;
            width: 40%;
        }
        .social-links {
            min-width: 130px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include mq($from: desktop) {
                min-width: 200px;
            }
        }
        a {
            svg {
                path {
                    stroke: #fff;
                }
            }
        }
        .get-in-touch {
            font-family: $blaak-black-regular;
            font-size: 12.1px;
            font-weight: 900;
            line-height: 11.4px;
            text-align: left;
            padding: 1.5rem;
            background-color: #fff;
            border-radius: 9px;
            color: #000;
            border: 1px solid #fff;
            transition: all 0.1s ease-out;
            &:hover {
                background-color: #000;
                color: #fff;
            }
            @include mq($from: desktop) {
                font-size: 14px;
            }
        }
    }
}
.woocommerce-account {
    .account-banner-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        // object-position: center -2rem;
    }
    h2 {
        font-family: $blaak-black-regular;
        font-size: 26.3px;
        font-weight: 900;
        line-height: 24.7px;
        text-align: left;
        color: #fff;
        position: relative;
        margin-bottom: 1rem;
        // @include mq($from: desktop) {
        //     font-size: 32px;
        // }
        &::before {
            content: url("/wp-content/themes/kirgo-theme/assets/images/icons/left-arrow.svg");
            margin-right: 10px;
        }
    }
    .woocommerce-order-details__title {
        &::before {
            display: none;
        }
    }
    .woocommerce-column__title {
        color: #fff;
        font-size: 21.3px;
        &::before {
            display: none;
        }
    }
    .woocommerce {
        font-family: $lekton;
        padding: 2rem 1rem;
        color: #000;
        background-color: #fff;
        .col-1 {
            width: 100%;
        }
        .col-2 {
            width: 100%;
        }
        .woocommerce-form,
        .woocommerce-form-row {
            label {
                display: none;
            }
            input {
                width: 100%;
                padding: 1rem;
                line-height: 1;
                border-radius: 6px;
                font-family: $lekton;
                font-size: 14px;
                font-weight: bold;
                letter-spacing: -0.14px;
                text-align: left;
                color: #000;
                text-transform: lowercase;
                -webkit-backdrop-filter: blur(4.9px);
                backdrop-filter: blur(4.9px);
                border: solid 0.3px rgb(13 12 12 / 60%);
                background-color: rgba(13, 12, 12, 0);
                @include mq($from: desktop) {
                    font-size: 18px;
                }
            }
            .woocommerce-button.woocommerce-form-login__submit,
            .woocommerce-Button.button {
                border-radius: 6px;
                border: solid 1px #000;
                background-color: #0d0c0c;
                font-family: $blaak-black-regular;
                font-size: 12.1px;
                font-weight: 900;
                line-height: 11.4px;
                text-align: center;
                color: #fff;
                width: 100%;
                padding: 1rem 0;
                @include mq($from: desktop) {
                    font-size: 14px;
                }
            }
            .create-account-btn {
                border-radius: 6px;
                border: solid 1px #000;
                font-family: $blaak-black-regular;
                font-size: 12.1px;
                font-weight: 900;
                line-height: 11.4px;
                text-align: center;
                width: 100%;
                padding: 1rem 0;
                color: #000;
                background-color: #fff;
                display: flex;
                justify-content: center;
                text-decoration: none;
                margin-bottom: 1rem;
                @include mq($from: desktop) {
                    font-size: 14px;
                }
            }
            .woocommerce-LostPassword {
                a {
                    opacity: 0.7;
                    font-family: $blaak-black-regular;
                    font-size: 13px;
                    font-weight: 100;
                    line-height: 17.9px;
                    letter-spacing: 0.2px;
                    color: #0d0c0c;
                    @include mq($from: desktop) {
                        font-size: 16px;
                    }
                }
            }
        }
        .woocommerce-MyAccount-content {
            & > * {
                @include mq($from: desktop) {
                    max-width: 400px;
                    margin: 0 auto;
                }
            }
            h3 {
                font-family: $blaak-black-regular;
                font-size: 21.3px;
                font-weight: 900;
                line-height: 20px;
                color: #fff;
                text-transform: lowercase;
            }
            .woocommerce-orders-table {
                width: 100%;
                margin: 0 auto 2rem;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
                padding: 0.75rem 0;
                display: flex;
                flex-direction: column;
                .product-name dt,
                .product-name strong,
                .cart-subtotal th,
                .order-total th {
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                    font-family: $lekton;
                    font-size: 14px;
                    line-height: 19.2px;
                    letter-spacing: 0.21px;
                    font-weight: normal;
                    text-align: left;
                    color: #7b7b7b;
                    @include mq($from: desktop) {
                        font-size: 18px;
                    }
                }
                tr {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border: solid 0 #000;
                    background-color: #171616;
                    padding: 1rem;
                    border-radius: 10px;
                    &:not(:last-child) {
                        margin-bottom: 1rem;
                    }
                    td {
                        @include mq($from: desktop) {
                            text-align: right;
                        }
                        &::before {
                            @include mq($from: desktop) {
                                display: block;
                            }
                        }
                        &:last-child {
                            margin-top: 1rem;
                        }
                        &.woocommerce-orders-table__cell-order-actions {
                            a {
                                margin-left: 0.5rem;
                            }
                        }
                        .button.wp-element-button {
                            margin: 0;
                            display: unset;
                            padding: 0.5rem 1rem;
                            text-transform: lowercase;
                            border: 1px solid #fff;
                            transition: all 0.1s ease-out;
                            &:hover {
                                background-color: #000;
                                color: #fff;
                            }
                        }
                        .button.wp-element-button.view {
                            margin: 0 0.5rem;
                        }
                    }
                }
                thead {
                    tr {
                        @include mq($from: desktop) {
                            display: none;
                        }
                    }
                }
                tfoot {
                    .cart-subtotal {
                        padding-bottom: 0.75rem;
                    }
                    .order-total {
                        border-top: 1px solid #fff;
                        padding-top: 10px;
                    }
                }
            }
            .woocommerce-Addresses {
                .woocommerce-Address-title {
                    display: flex;
                    align-items: center;
                    h2 {
                        margin: 1rem 0;
                        font-family: $blaak-black-regular;
                        font-size: 21.3px;
                        font-weight: 900;
                        line-height: 20px;
                        color: #fff;
                        text-transform: lowercase;
                    }
                    a {
                        margin-left: auto;
                        font-family: $blaak-black-regular;
                        padding: 0.75rem 1rem;
                        background-color: #fff;
                        color: #000;
                        text-decoration: none;
                        border-radius: 6px;
                        font-weight: 700;
                        line-height: 1;
                        text-transform: lowercase;
                        border: 1px solid #fff;
                        transition: all 0.1s ease-out;
                        &:hover {
                            background-color: #000;
                            color: #fff;
                        }
                    }
                }
            }
        }
        .woocommerce-order-details {
            .woocommerce-order-details__title,
            .shop_table.order_details {
                width: 100%;
                tfoot {
                    tr {
                        th {
                            text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
                            font-family: $lekton;
                            font-size: 16px;
                            line-height: 19.2px;
                            letter-spacing: 0.21px;
                            font-weight: normal;
                            text-align: left;
                            color: #7b7b7b;
                        }
                        td {
                            text-align: right;
                        }
                    }
                }
            }
        }
        #account_display_name {
            margin-bottom: 1rem;
        }
        fieldset {
            legend {
                font-family: $blaak-black-regular;
                font-size: 21.3px;
                font-weight: 900;
                line-height: 20px;
                color: #fff;
                text-transform: lowercase;
                margin: 1rem 0;
            }
        }
    }
    .account-social-link {
        display: none;
    }
    .woocommerce-ResetPassword {
        p {
            font-weight: 700;
        }
    }
}
```

## File: template-parts/woocommerce/content-product-meta-top.php
```php
/**
 * Product Details after Buy Button and before Reviews
 */
```

## File: template-parts/content.php
```php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
// Display the featured image
⋮----
// Display a placeholder image
⋮----
/* translators: %s: Name of current post. Only visible to screen readers */
```

## File: index.php
```php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kirgo
 */
⋮----
/* Start the Loop */
⋮----
/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
```

## File: assets/sass/components/accordion.scss
```scss
.accordion {
    margin: 2rem -2rem 0;
    @include mq($from: desktop) {
        margin: 2rem 0 0;
    }
    // .accordion-flush
    &-flush {
    }
    // .accordion-item
    &-item {
        background-color: $background-color;
        color: #fff;
        border-color: #343434;
    }
    // .accordion-header
    &-header {
    }
    // .accordion-button
    &-button {
        background-color: #050505;
        font-family: $blaak;
        font-size: 17px;
        font-weight: 900;
        line-height: 0.94;
        text-align: left;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: all 0.1s ease-out;
        @include mq($until: desktop) {
            padding: 1.5rem 2rem;
        }
        @include mq($from: desktop) {
            font-size: 22px;
        }
        &:focus {
            border-color: unset;
            box-shadow: unset;
        }
        &:hover {
            color: #bbcea8;
        }
        span {
            display: block;
            font-family: $lekton;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            font-size: 12px;
            font-weight: 400;
            line-height: 1.37;
            letter-spacing: 2.16px;
            text-align: left;
            color: rgba(255, 255, 255, 0.44);
            margin-bottom: 0.2rem;
            @include mq($from: desktop) {
                font-size: 14.9px;
            }
        }
        svg {
            position: absolute;
            right: 2rem;
            top: 42.5%;
            transition: transform 0.3s ease;
        }
        &::after {
            content: unset;
        }
        &:not(.collapsed) {
            background-color: #050505;
            color: #fff;
            box-shadow: none;
            svg {
                transform: rotate(90deg);
            }
        }
    }
    // .accordion-collapse
    &-collapse {
    }
    // .accordion-body
    &-body {
        padding: 1rem 2rem;
    }
}
.collapsed {
}
.collapse {
}
```

## File: assets/sass/pages/product-listing.scss
```scss
.woocommerce-shop {
    #primary .newsletter-section {
        padding: 0;
    }
    .site-main {
        padding: 1rem 2rem;
        font-family: $lekton;
        @include mq($until: desktop) {
            margin-top: 4rem;
        }
        .woocommerce-breadcrumb {
            display: none;
        }
        .orderby {
            backdrop-filter: blur(4.9px);
            border: solid 0.3px rgb(255 255 255 / 60%);
            background-color: rgba(255, 255, 255, 0);
            width: 100%;
            padding: 1rem;
            border-radius: 6px;
            font-family: "Lekton";
            font-size: 14px;
            font-weight: bold;
            letter-spacing: -0.14px;
            text-align: left;
            color: #fff;
            height: unset;
        }
        .select2-selection__rendered {
            line-height: 1;
            color: #fff;
        }
        .select2-selection__arrow {
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .woocommerce-products-header {
            position: relative;
            &::before {
                content: url("/wp-content/themes/kirgo-theme/assets/images/about-us/text-icon.svg");
                position: absolute;
                width: 100%;
                transform: scale(0.6);
                display: flex;
                justify-content: center;
                top: 0;
                @include mq($until: desktop) {
                    display: none;
                }
            }
            .woocommerce-products-header__title {
                display: none;
            }
        }
        .woocommerce-result-count {
            display: none;
        }
        form.woocommerce-ordering {
            max-width: 530px;
            display: flex;
            margin: 8rem auto 5rem;
            height: 60px;
            @include mq($until: desktop) {
                margin: 0 auto 2rem;
            }
            select.orderby {
                border-radius: 7.3px;
                background-color: #171616;
                border: none;
                text-shadow: 0 2.9px 8.8px rgba(0, 0, 0, 0.25);
                font-family: $lekton;
                font-size: 17.5px;
                font-weight: bold;
                line-height: 24px;
                letter-spacing: 0.88px;
                text-align: left;
                color: rgba(255, 255, 255, 0.44);
                text-transform: lowercase;
                appearance: none;
                background-image: url("/wp-content/themes/kirgo-theme/assets/images/icons/filter.svg");
                background-repeat: no-repeat;
                background-size: 35px;
                background-position: right 16px top 14px;
                @include mq($until: desktop) {
                    font-size: 12px;
                    height: 45px;
                    padding: 0.5rem 1rem;
                    background-size: 30px;
                    background-position: right 8px top 8px;
                }
                &:hover {
                    cursor: pointer;
                }
                &:focus-visible {
                    outline: none;
                }
            }
        }
        ul.products {
            margin-top: 5rem;
            margin: auto;
            display: flex;
            max-width: 1100px;
            flex-wrap: wrap;
            gap: 1rem;
            @include mq($from: tablet, $until: desktop-md) {
                max-width: 700px;
            }
            li.product {
                width: 32.25%;
                min-width: 340px;
                margin: 0;
                border-radius: 9px;
                box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.07);
                background-color: #171616;
                padding: 10px;
                display: flex;
                flex-direction: column;
                position: relative;
                @include mq($until: mobile-md) {
                    min-width: 100%;
                }
                @include mq($until: tablet) {
                    max-width: 350px;
                }
                .product-tags {
                    position: absolute;
                    min-width: 110px;
                    padding: 8px;
                    top: 80px;
                    left: -41px;
                    transform: rotate(-90deg);
                    text-shadow: 0 1.5px 4.6px rgba(0, 0, 0, 0.25);
                    font-family: $lekton;
                    font-size: 9.2px;
                    font-weight: bold;
                    line-height: 12.6px;
                    letter-spacing: 2.59px;
                    text-align: center;
                    color: #fff;
                    text-transform: uppercase;
                    z-index: 1;
                    -webkit-backdrop-filter: blur(4px);
                    backdrop-filter: blur(4px);
                    background-color: rgba(224, 255, 193, 0.11);
                    top: 80px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
                a {
                    text-decoration: none;
                    position: unset;
                }
                img.attachment-woocommerce_thumbnail {
                    width: 100%;
                    height: 450px;
                    object-fit: cover;
                    border-radius: 9px;
                    @include mq($until: desktop) {
                        height: 400px;
                    }
                }
                img.attachment-woocommerce_thumbnail {
                    // @include mq($until: tablet) {
                    //     transform: scale(1.5) translate(0px, -60px);
                    // }
                }
                .product-card-details {
                    padding: 2rem 1rem 1rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    .woocommerce-loop-product__title {
                        font-family: $blaak-black-regular;
                        font-size: 25px;
                        font-weight: 900;
                        line-height: 23.5px;
                        text-align: left;
                        color: #fff;
                        text-transform: lowercase;
                        max-width: 160px;
                    }
                    .price,
                    .add_to_cart_button {
                        display: none;
                    }
                    .product-card-short-desc {
                        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                        font-family: $lekton;
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 17.8px;
                        letter-spacing: 0.2px;
                        text-align: left;
                        color: #fff;
                        margin: 1rem 0 1.5rem;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .product-share-modal-button {
                        top: 2rem;
                        right: 3.5rem;
                        transform: scale(1.1);
                    }
                    .shop-add-to-cart {
                        background-color: #0000;
                        border: none;
                        width: fit-content;
                        position: absolute;
                        top: 2rem;
                        right: 10px;
                        z-index: 1;
                    }
                    .shop-add-to-cart-modal {
                        -webkit-backdrop-filter: blur(7px);
                        backdrop-filter: blur(7px);
                        background-color: rgba(217, 217, 217, 0.02);
                        .modal-dialog {
                            position: absolute;
                            width: 100%;
                            bottom: 0;
                            left: 0;
                            margin: 0;
                            top: unset;
                            min-height: unset;
                            @include mq($from: desktop) {
                                position: unset;
                                margin: auto;
                                min-height: -webkit-fill-available;
                            }
                            .modal-content {
                                background-color: #000;
                                padding: 2rem;
                                .modal-body {
                                    padding: 0;
                                    .modal-title {
                                        font-family: $blaak-black-regular;
                                        font-size: 21px;
                                        font-weight: 900;
                                        line-height: 1.2;
                                        text-align: center;
                                        color: #fff;
                                        text-transform: lowercase;
                                        margin-bottom: 1rem;
                                        @include mq($from: desktop) {
                                            font-size: 30px;
                                        }
                                        span {
                                            color: #bbcea8;
                                        }
                                    }
                                }
                            }
                        }
                        .woovr-variations {
                            margin: auto;
                            display: flex;
                            justify-content: space-between;
                            width: 75%;
                            @include mq($from: desktop) {
                                width: 65%;
                            }
                            .woovr-variation {
                                &[data-id="0"],
                                &-selector,
                                &-image,
                                &-price {
                                    display: none;
                                }
                                &-name {
                                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                    font-family: $lekton;
                                    font-size: 35px;
                                    font-weight: bold;
                                    line-height: 1.37;
                                    letter-spacing: 0.27px;
                                    text-align: left;
                                    color: #fff;
                                    border-radius: 6px;
                                    border: solid 4px #fff;
                                    width: 70px;
                                    height: 70px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    padding-top: 3px;
                                    transition: all 0.1s ease;
                                    @include mq($from: desktop) {
                                        font-size: 37px;
                                        width: 80px;
                                        height: 80px;
                                    }
                                }
                                &__extra {
                                    display: none;
                                }
                                &:hover {
                                    background-color: unset;
                                    .woovr-variation-name {
                                        background-color: #fff;
                                        color: #000;
                                        text-shadow: 0 2px 6px
                                            rgba(0, 0, 0, 0.25);
                                    }
                                }
                                &-active {
                                    .woovr-variation-name {
                                        background-color: #fff;
                                        color: #000;
                                        text-shadow: 0 2px 6px
                                            rgba(0, 0, 0, 0.25);
                                    }
                                }
                            }
                        }
                        .single_variation_wrap {
                            .added_to_cart.wc-forward {
                                display: none;
                            }
                        }
                        .quantity {
                            display: none !important;
                        }
                        .single_add_to_cart_button.wp-element-button {
                            font-family: $blaak-black-regular;
                            font-size: 14px;
                            font-weight: 900;
                            line-height: 3.5;
                            text-align: center;
                            color: #000;
                            padding: 0;
                            border: 1px solid #fff;
                            text-transform: lowercase;
                            transition: 0.1s ease-out;
                            width: 100%;
                            border-radius: 6px;
                            &:hover {
                                color: #fff;
                                border: 1px solid #fff;
                                background-color: #0000;
                            }
                            @include mq($from: desktop) {
                                font-size: 24px;
                                line-height: 2.5;
                            }
                        }
                        .accordion,
                        [name="buy-now"].single_add_to_cart_button {
                            display: none;
                        }
                    }
                    .product-card-buy-btn {
                        font-family: $lekton;
                        font-size: 13px;
                        font-weight: bold;
                        text-align: center;
                        color: #000;
                        height: 45px;
                        line-height: 1;
                        border: 1px solid #fff;
                        transition: 0.1s ease-out;
                        border-radius: 4.7px;
                        box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.25);
                        margin-top: auto;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #fff;
                        &:hover {
                            color: #fff;
                            border: 1px solid #fff;
                            background-color: #0000;
                        }
                        @include mq($from: desktop) {
                            font-size: 16px;
                        }
                    }
                }
                .img-slider-nav {
                    position: absolute;
                    top: 400px;
                    right: 30px;
                    z-index: 1;
                    width: 140px;
                    @include mq($until: desktop) {
                        top: 340px;
                    }
                    .carousel-nav {
                        .flickity-viewport {
                            width: 140px;
                        }
                        .carousel-nav-item.is-nav-selected {
                            border: solid 3px #bbcea8;
                        }
                        .carousel-nav-item {
                            width: 40px;
                            height: 40px;
                            border-radius: 5px;
                            margin-right: 10px;
                            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
                            border: solid 3px rgba(255, 255, 255, 0.31);
                            background-color: rgba(255, 255, 255, 0.31);
                            img.attachment-woocommerce_thumbnail {
                                width: 100%;
                                height: 100%;
                                border-radius: 5px;
                            }
                        }
                    }
                }
            }
            li.product_cat-summer-collection {
                background-color: #fff;
                .product-card-details {
                    .woocommerce-loop-product__title {
                        color: #000;
                    }
                    .product-card-short-desc {
                        color: #000;
                    }
                    .shop-add-to-cart,
                    .product-share-modal-button {
                        svg {
                            path {
                                fill: #000;
                            }
                        }
                    }
                    .product-card-buy-btn {
                        color: #fff;
                        background-color: #df5386;
                        border: 1px solid #df5386;
                        &:hover {
                            color: #000;
                            border: 1px solid #000;
                            background-color: #0000;
                        }
                    }
                }
                .product-tags {
                    background-color: #df5386;
                }
            }
            li.product_cat-summer-collection.product_cat-set-product {
                background-color: #df5386;
                .product-tags {
                    background-color: #8e2a4f;
                }
                .product-card-details {
                    .woocommerce-loop-product__title {
                        color: #fff;
                    }
                    .product-card-short-desc {
                        color: #fff;
                    }
                    .shop-add-to-cart,
                    .product-share-modal-button {
                        svg {
                            path {
                                fill: #fff;
                            }
                        }
                    }
                    .product-card-buy-btn {
                        color: #de5386;
                        border: 1px solid #fff;
                        background-color: #fff;
                        &:hover {
                            color: #000;
                            border: 1px solid #000;
                            background-color: #0000;
                        }
                    }
                }
            }
            li.product.post-438 {
                background-color: #fff;
                .product-tags {
                    background-color: rgba(0, 0, 0, 0.78);
                }
                .product-card-details {
                    .woocommerce-loop-product__title {
                        color: #000;
                    }
                    .product-card-short-desc {
                        color: #000;
                    }
                    .shop-add-to-cart,
                    .product-share-modal-button {
                        svg {
                            path {
                                fill: #000;
                            }
                        }
                    }
                    .product-card-buy-btn {
                        color: #fff;
                        border: 1px solid #000;
                        background-color: #000;
                        &:hover {
                            color: #000;
                            border: 1px solid #000;
                            background-color: #0000;
                        }
                    }
                }
            }
        }
        .single_add_to_cart_button.button.alt {
            font-family: "BlaakRegular_personal";
            font-size: 14px;
            font-weight: 900;
            line-height: 3.5;
            text-align: center;
            color: #000;
            padding: 0;
            border: 1px solid #fff;
            background-color: #fff;
            text-transform: lowercase;
            transition: 0.1s ease-out;
            width: 100%;
            display: flex;
            justify-content: center;
            border-radius: 5px;
        }
    }
}
```

## File: template-parts/woocommerce/content-product-meta-bottom.php
```php
/**
 * Product Details after Reviews
 */
```

## File: template-parts/woocommerce/content-product-set.php
```php
/**
 * Product Set Template
 */
⋮----
$current_product_id = get_the_ID(); // Store current product ID
⋮----
if ( $product && has_term( 'summer-collection', 'product_cat', $product->get_id() ) ) {
⋮----
'post__not_in'   => array( $current_product_id ), // Exclude current product
⋮----
<?php if ( $summer_query->have_posts() ) : ?>
<?php while ( $summer_query->have_posts() ) : $summer_query->the_post(); global $product; ?>
⋮----
<button class="buy-button btn btn-dark product-size-modal-button" data-bs-toggle="modal" data-bs-target="#product-size-modal-<?php echo get_the_ID(); ?>">buy the set for <span>&nbsp;<?php echo $product->get_price_html(); ?></span></button>
⋮----
<button class="buy-button btn btn-dark product-size-modal-button" data-bs-toggle="modal" data-bs-target="#product-size-modal-<?php echo get_the_ID(); ?>">buy the set for <span> &nbsp;<?php echo $product->get_price_html(); ?></span></button>
```

## File: inc/woocommerce/single-product.php
```php
/**
 * Extra variations component
 */
function woocommerce_single_product_variations_extras() {
$product_id = get_the_ID(); // Get the current product ID
$specific_product_id = 65; // Change 123 to your specific product ID
⋮----
/**
 * Transform buy now button
 */
function tranform_buy_now($output, $atts) {
⋮----
$btn_text = 'buy for ' . wc_price( wc_get_price_to_display( $product, array( 'price' => $product->get_price() ) ) );
$output = sprintf( '<button type="submit" name="buy-now" value="%d" class="product-detail-buy-now-btn wpcbn-btn wpcbn-btn-single single_add_to_cart_button button alt btn btn-light" data-product_id="%s">%s</button>', $product->get_ID(), $product->get_ID(), $btn_text );
⋮----
/**
 * Add icon to add to cart
 */
⋮----
/**
 * After Product Add to cart button
 */
function woocommerce_single_product_after_addtocart() {
⋮----
/**
 * After Product Reviews
 */
function woocommerce_single_product_after_reviews() {
⋮----
/**
* Remove tabs from woocommerce
*/
⋮----
function woo_remove_product_tabs( $tabs ) {
unset( $tabs['description'] ); // Remove the description tab
// unset( $tabs['reviews'] ); // Remove the reviews tab
unset( $tabs['additional_information'] ); // Remove the additional information tab
⋮----
/**
 * Remove related products output
 */
```

## File: template-parts/template-about-us.php
```php
<?php /* Template Name: About Us */ ?>
```

## File: header.php
```php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kirgo
 */
```

## File: assets/sass/components/footer.scss
```scss
.footer-section {
    // footer-section__image
    &__image {
        display: none;
        width: 100%;
        margin: 2rem 0 1rem;
        @include mq($from: desktop) {
            max-width: 660px;
            display: flex;
            margin: 12rem auto 3rem;
        }
    }
    // .footer-section__main
    &__main {
        padding: 2rem;
        @include mq($from: desktop) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    // .footer-section__menu
    &__menu {
        margin-bottom: 2.5rem;
        width: 100%;
        // @include mq($from: desktop) {
        // }
        @include mq($from: desktop) {
            order: 2;
            height: 220px;
            display: flex;
            flex-flow: column;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }
    }
    // .footer-section__link
    &__link {
        font-family: $lekton;
        font-size: 12px;
        letter-spacing: 4.8px;
        text-align: left;
        color: #fff;
        text-decoration: none;
        display: block;
        margin-bottom: 1.5rem;
        @include mq($from: desktop) {
            width: 50%;
            font-size: 19.2px;
            letter-spacing: 7.68px;
            padding-left: 30px;
            margin-bottom: 2rem;
            height: 40px;
            &:nth-child(-n + 3) {
                text-align: right;
                padding-right: 30px;
            }
        }
        &:hover {
            color: #bbcea8;
        }
    }
    // .footer-section__getInTouch
    &__getInTouch {
        margin-bottom: 2.5rem;
        @include mq($from: desktop) {
            order: 3;
            width: 440px;
        }
    }
    // .footer-section__getInTouchTitle
    &__getInTouchTitle {
        font-size: 17px;
        font-weight: 900;
        line-height: 22.4px;
        letter-spacing: -0.09px;
        text-align: left;
        color: #fff;
        margin-bottom: 0.7rem;
        @include mq($from: desktop) {
            font-size: 21px;
            line-height: 20.3px;
            opacity: 0.36;
            text-align: center;
            margin-bottom: 2rem;
        }
    }
    // .footer-section__getInTouchLinks
    &__getInTouchLinks {
        @include mq($from: desktop) {
            display: flex;
            justify-content: space-between;
        }
    }
    // .footer-section__getInTouchLink
    &__getInTouchLink {
        flex-grow: 0;
        opacity: 0.7;
        font-size: 13px;
        font-weight: 100;
        line-height: 17.9px;
        letter-spacing: 0.2px;
        text-align: left;
        color: #fff;
        font-family: BlaakThin;
        display: block;
        text-decoration: none;
        margin-bottom: 0.5rem;
        @include mq($from: desktop) {
            font-size: 20.9px;
            line-height: 28.8px;
            letter-spacing: 0.31px;
            opacity: 1;
        }
        &:hover {
            color: #bbcea8;
        }
    }
    // .footer-section__getInTouchImg
    &__getInTouchImg {
        margin-right: 1rem;
        @include mq($from: desktop) {
            width: 20px;
        }
    }
    // .footer-section__note
    &__note {
        @include mq($from: desktop) {
            order: 1;
            text-align: center;
            margin-bottom: 3rem;
        }
    }
    // .footer-section__noteTitle
    &__noteTitle {
        font-size: 17px;
        font-weight: 900;
        line-height: 22.4px;
        letter-spacing: -0.09px;
        // text-align: left;
        color: #fff;
        margin-bottom: 0.7rem;
        @include mq($from: desktop) {
            font-size: 21px;
            line-height: 20.3px;
            opacity: 0.36;
        }
    }
    // .footer-section__noteText
    &__noteText {
        opacity: 0.7;
        font-family: $blaak-black-light;
        font-size: 13px;
        font-weight: 100;
        line-height: 17.9px;
        letter-spacing: 0.2px;
        // text-align: left;
        color: #fff;
        max-width: 75%;
        @include mq($from: desktop) {
            font-size: 16px;
            line-height: 24.7px;
            opacity: 1;
            max-width: 700px;
            margin: 1.5rem auto;
        }
    }
    // .footer-section__noteSign
    &__noteSign {
        opacity: 0.4;
        font-family: $blaak-black-light;
        font-size: 13px;
        font-weight: 300;
        line-height: 12.2px;
        letter-spacing: 0.13px;
        // text-align: left;
        color: #fff;
        margin-bottom: 0;
        @include mq($from: desktop) {
            margin: 1rem 0;
        }
    }
    // .footer-section__noteSignKirgo
    &__noteSignKirgo {
        margin-left: -2px;
        @include mq($from: desktop) {
            margin: auto;
        }
        svg {
            width: 35px;
            height: 20px;
            @include mq($from: desktop) {
                width: 60px;
                height: 25px;
            }
        }
    }
    // .footer-section__sub
    &__sub {
    }
    // .footer-section__subMenu
    &__subMenu {
        padding: 1rem 2rem;
        background-color: #101010;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include mq($from: desktop) {
            padding: 1.5rem 3rem;
            position: relative;
            &::before {
                position: absolute;
                content: url("/wp-content/themes/kirgo-theme/assets/images/kirgo-icon.png");
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.35);
            }
        }
    }
    // .footer-section__offer
    &__offer {
        display: flex;
        @include mq($from: desktop) {
            align-items: center;
        }
    }
    // .footer-section__offerImg
    &__offerImg {
        margin-right: 10px;
        @include mq($from: desktop) {
            margin-right: 35px;
            transform: scale(2.25);
            display: flex;
        }
        svg {
            width: 20px;
            height: 20px;
            path:nth-child(3) {
                stroke: #fff;
            }
        }
    }
    // .footer-section__offerTag
    &__offerTag {
        font-family: $lekton;
        font-size: 12px;
        font-weight: bold;
        line-height: 14.2px;
        letter-spacing: 2.28px;
        text-align: left;
        color: #fff;
        margin-bottom: 0;
        @include mq($from: desktop) {
            font-size: 20px;
            line-height: 23.7px;
            letter-spacing: 3.81px;
        }
    }
    // .footer-section__socialLinks
    &__socialLinks {
        flex-basis: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include mq($from: desktop) {
            flex-basis: 150px;
        }
    }
    // .footer-section__socialLink
    &__socialLink {
        @include mq($from: desktop) {
            transform: scale(1.25);
        }
        svg {
            path {
                stroke: #fff;
            }
        }
        &:hover {
            svg {
                path {
                    stroke: #bbcea8;
                }
            }
        }
    }
    // .footer-section__socialLinkImg
    &__socialLinkImg {
    }
    // .footer-section__copyRight
    &__copyRight {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include mq($from: desktop) {
            position: relative;
            padding: 1rem 3rem;
        }
        p {
            margin-bottom: 0;
        }
    }
    // .footer-section__copyRightKiro
    &__copyRightKiro {
        font-family: $lekton;
        font-size: 8px;
        font-weight: bold;
        letter-spacing: 2.84px;
        color: #fff;
        @include mq($from: desktop) {
            font-size: 14.8px;
            letter-spacing: 5.25px;
        }
    }
    // .footer-section__termsPolicyLinks
    &__termsPolicyLinks {
        display: flex;
        gap: 1.5rem;
        @include mq($from: desktop) {
            position: absolute;
            left: 0;
            width: 100%;
            justify-content: center;
        }
    }
    // .footer-section__termsPolicyLink
    &__termsPolicyLink {
        font-family: $lekton;
        color: #fff;
        font-size: 10px;
        text-decoration: none;
        display: none;
        &:hover {
            color: #bbcea8;
        }
        @include mq($from: desktop) {
            font-size: 16px;
            display: block;
        }
    }
    .footer-section__termsPolicyLink.mobile-link {
        display: block;
        @include mq($from: desktop) {
            display: none;
        }
    }
    // .footer-section__copyRightSecondary
    &__copyRightSecondary {
        font-family: $lekton;
        font-size: 10px;
        text-align: center;
        color: #fff;
        @include mq($from: desktop) {
            font-size: 19.2px;
        }
    }
    // .footer-section__doriameIcon
    &__doriameIcon {
        width: 50px;
        height: 10px;
        object-fit: cover;
        @include mq($from: desktop) {
            width: 92px;
            height: 18px;
        }
    }
}
.doriame {
}
```

## File: assets/sass/pages/cart.scss
```scss
.woocommerce-cart {
    .woocommerce {
        font-family: $lekton;
        color: #fff;
        padding: 0 2rem;
        margin-top: 80px;
        @include mq($from: desktop) {
            padding: unset;
            // margin: 6rem auto 1rem;
            // max-width: 1000px;
            margin-top: unset;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        @include mq($from: desktop-xl) {
            // max-width: 1200px;
        }
        a.checkout-button.button {
            font-family: $blaak-black-regular;
            font-size: 12.1px;
            font-weight: 900;
            line-height: 11.4px;
            text-align: center;
            color: #000;
            text-decoration: none;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 0;
            border-radius: 6px;
            margin-top: 3rem;
            position: -webkit-sticky;
            position: sticky;
            bottom: 2rem;
            text-transform: lowercase;
            border: 1px solid #fff;
            transition: all 0.1s ease-out;
            &:hover {
                background-color: #000;
                color: #fff;
            }
            @include mq($from: desktop) {
                position: unset;
                max-width: 400px;
                width: -webkit-fill-available;
                margin: 2rem 0 0;
                flex-basis: unset;
                font-size: 17px;
            }
            @include mq($from: desktop-xl) {
                max-width: 428px;
            }
        }
        .cart-empty {
            background-color: #0000;
            text-align: center;
            margin-top: 8rem;
            display: block !important;
            @include mq($from: desktop) {
                margin-top: 15rem;
                font-size: 2rem;
            }
        }
        .return-to-shop {
            text-align: center;
            a {
                color: #fff;
                @include mq($from: desktop) {
                    font-size: 1.75rem;
                }
            }
        }
        form.woocommerce-cart-form {
            @include mq($from: desktop) {
                flex-basis: 60%;
                min-height: 100vh;
            }
            .shop_table.woocommerce-cart-form__contents {
                @include mq($from: desktop) {
                    margin: 10rem auto 0 0;
                    margin-left: 20%;
                    width: 50%;
                    max-width: 450px;
                    position: relative;
                    &::before {
                        position: absolute;
                        content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/prev-arrow.svg");
                        left: -2rem;
                        top: -4rem;
                        transform: scale(0.6);
                    }
                    &::after {
                        position: absolute;
                        content: "bag";
                        font-family: $blaak-black-regular;
                        font-size: 42px;
                        font-weight: 700;
                        top: -4.5rem;
                        left: 0;
                    }
                }
            }
        }
        .shop_table {
            width: 100%;
            thead {
                tr {
                    display: none;
                }
            }
            .woocommerce-cart-form__cart-item {
                display: grid;
                grid-template-columns: 40% 60%;
                grid-column-gap: 1rem;
                align-items: center;
                position: relative;
                border-radius: 9px;
                box-shadow: 0 1px 32px 0 rgb(0 0 0 / 7%);
                background-color: #171616;
                padding: 1rem;
                overflow: hidden;
                margin-bottom: 1rem;
            }
            .product-thumbnail {
                position: absolute;
                width: 41%;
                height: 100%;
                top: 0;
                left: 0;
                // grid-column: 1 / 2;
                &::before {
                    display: none;
                }
                img {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }
            }
            .product-remove {
                display: flex;
                z-index: 1;
                width: 20px;
                height: 20px;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 5px;
                right: 3px;
                a {
                    color: #0000;
                    text-decoration: none;
                    &::before {
                        content: url("/wp-content/themes/kirgo-theme/assets/images/icons/delete.svg");
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        z-index: 2;
                    }
                }
            }
            .product-subtotal {
                display: none;
            }
            .product-name,
            .product-price,
            .product-quantity {
                grid-column: 2 / 3;
                text-align: left;
                margin-right: 1rem;
            }
            .product-name {
                margin-right: 2rem;
                &::before {
                    display: none;
                }
                a {
                    font-family: $blaak-black-regular;
                    font-size: 20px;
                    font-weight: 900;
                    line-height: 21.5px;
                    text-align: left;
                    color: #fff;
                    text-decoration: none;
                    text-transform: lowercase;
                    @include mq($from: desktop) {
                        font-size: 27px;
                    }
                }
                .variation {
                    margin: 0.5rem 0 0;
                    display: flex;
                    max-height: 20px;
                    dt.variation-Size {
                        text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
                        font-family: $lekton;
                        font-size: 14px;
                        line-height: 19.2px;
                        letter-spacing: 0.21px;
                        text-align: left;
                        color: #7b7b7b;
                        font-weight: normal;
                        width: 3rem;
                        @include mq($from: desktop) {
                            font-size: 16px;
                        }
                    }
                    dd.variation-Size {
                        p {
                            text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
                            font-family: $lekton;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 19.2px;
                            letter-spacing: 0.21px;
                            text-align: left;
                            color: #fff;
                            @include mq($from: desktop) {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
            .product-price {
                height: 20px;
                display: flex;
                .woocommerce-Price-amount {
                    text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
                    font-family: $lekton;
                    font-size: 14px;
                    font-weight: bold;
                    line-height: 19.2px;
                    letter-spacing: 0.21px;
                    text-align: left;
                    color: #fff;
                    @include mq($from: desktop) {
                        font-size: 16px;
                    }
                }
            }
            .product-quantity {
                margin-top: 1rem;
                .quantity {
                    display: flex;
                    width: 100%;
                    button,
                    input {
                        background-color: #0000;
                        text-align: center;
                        height: 30px;
                        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                        font-family: $lekton;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 21.9px;
                        letter-spacing: 0.24px;
                        color: #fff;
                        @include mq($from: desktop) {
                            font-size: 20px;
                        }
                    }
                    button {
                        padding: 0 1rem;
                        border: 1px solid #fff;
                    }
                    input {
                        width: 90%;
                        border-top: 1px solid #fff;
                        border-bottom: 1px solid #fff;
                        border-right: none;
                        border-left: none;
                        border-radius: 0;
                        &:focus-visible {
                            outline: none;
                        }
                    }
                }
            }
            .actions {
                display: flex;
                flex-direction: column;
                &::before {
                    display: none;
                }
                .coupon {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-top: 3rem;
                    order: 2;
                    .input-text {
                        padding: 0.75rem 1rem;
                        border-radius: 6px;
                        -webkit-backdrop-filter: blur(4.9px);
                        backdrop-filter: blur(4.9px);
                        border: solid 0.3px #fff;
                        background-color: rgba(13, 12, 12, 0);
                        color: #fff;
                        line-height: 1;
                        @include mq($from: desktop) {
                            font-size: 17px;
                        }
                    }
                    .button.wp-element-button {
                        flex-grow: 0;
                        font-family: $blaak-black-regular;
                        font-size: 12.1px;
                        font-weight: 900;
                        line-height: 11.4px;
                        text-align: center;
                        color: #000;
                        text-decoration: none;
                        background-color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem 0;
                        border-radius: 6px;
                        margin: 0 0 1rem;
                        text-transform: lowercase;
                        border: 1px solid #fff;
                        transition: all 0.1s ease-out;
                        &:hover {
                            background-color: #0000;
                            color: #fff;
                        }
                        @include mq($from: desktop) {
                            margin: 0 0 3rem;
                            font-size: 17px;
                        }
                    }
                }
                [name="update_cart"]:disabled {
                    opacity: 0.2;
                }
                [name="update_cart"] {
                    background-color: #0000;
                    border: 1px solid #fff;
                    border-radius: 5px;
                    flex-grow: 0;
                    font-family: $lekton;
                    font-size: 13px;
                    font-weight: bold;
                    text-align: center;
                    color: #fff;
                    padding: 0.5rem 1rem;
                    line-height: 1;
                    order: 1;
                    width: max-content;
                    margin-left: auto;
                    border: 1px solid #fff;
                    transition: all 0.1s ease-out;
                    &:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    @include mq($from: desktop) {
                        font-size: 17px;
                    }
                }
            }
        }
        .cart-collaterals {
            margin-top: 2rem;
            @include mq($from: desktop) {
                flex-basis: 40%;
                margin-top: 0;
                padding: 7rem 0 3rem;
                background-color: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                // height: 100vh;
            }
            .cart_totals {
                @include mq($from: desktop) {
                    max-width: 400px;
                }
                @include mq($from: desktop-xl) {
                    max-width: 460px;
                }
                h2 {
                    font-family: $blaak-black-regular;
                    font-size: 21.3px;
                    font-weight: 900;
                    line-height: 20px;
                    text-align: left;
                    color: #fff;
                    width: 90%;
                    margin: auto;
                    @include mq($from: desktop) {
                        font-size: 27px;
                    }
                }
            }
            .shop_table {
                width: 90%;
                margin: 2rem auto 0;
                tbody {
                    display: grid;
                    padding-top: 1rem;
                    border-top: 1px solid #fff;
                    a {
                        color: #fff;
                    }
                    th {
                        @include mq($from: desktop) {
                            display: none;
                        }
                    }
                    tr {
                        td {
                            padding: 0 1rem;
                            @include mq($from: desktop) {
                                display: flex;
                                justify-content: space-between;
                            }
                        }
                    }
                    tr.cart-discount {
                        td {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            &::before {
                                width: 65%;
                                @include mq($from: desktop) {
                                    width: 70%;
                                }
                            }
                            .woocommerce-Price-amount {
                                width: 30%;
                                @include mq($from: desktop) {
                                    width: 20%;
                                }
                            }
                            .woocommerce-remove-coupon {
                                margin-left: auto;
                                color: #fff;
                            }
                        }
                    }
                    tr.woocommerce-shipping-totals {
                        [data-title="Shipping"] {
                            flex-wrap: wrap;
                        }
                        #shipping_method {
                            list-style-type: none;
                            padding: 0;
                            margin: 0;
                        }
                        .woocommerce-shipping-destination {
                            display: none;
                        }
                    }
                }
                [data-title="Total"] {
                    margin-top: 1rem;
                    padding: 1rem;
                    border-bottom: 1px solid #fff;
                    border-top: 1px solid #fff;
                    line-height: 1;
                }
            }
            .wc-proceed-to-checkout {
                .discount-text {
                    font-family: $blaak-black-light;
                    font-size: 12px;
                    font-weight: 300;
                    line-height: 16.4px;
                    letter-spacing: 0.18px;
                    color: #fff;
                    max-width: 250px;
                    margin: 3rem auto;
                    text-align: center;
                    @include mq($from: desktop) {
                        max-width: unset;
                        margin: 3rem 2rem 1rem;
                        font-size: 19px;
                    }
                    strong {
                        text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
                        font-family: $blaak-black-regular;
                        font-size: 14px;
                        font-weight: bold;
                        line-height: 19.2px;
                        letter-spacing: 0.21px;
                        @include mq($from: desktop) {
                            font-size: 19px;
                        }
                    }
                    span {
                        font-family: $lekton;
                        font-weight: 900;
                    }
                    a {
                        color: #bbcea8;
                    }
                }
                a.checkout-button.button {
                    display: none;
                }
            }
        }
        table.shop_table_responsive tr td::before {
            text-shadow: 0 2px 6px rgb(0 0 0 / 25%);
            font-family: $lekton;
            font-size: 14px;
            line-height: 19.2px;
            letter-spacing: 0.21px;
            text-align: left;
            color: #7b7b7b;
            width: 3rem;
            display: block;
            margin-bottom: 5px;
            @include mq($from: desktop) {
                font-size: 16px;
            }
        }
    }
    .footer-section {
        display: none;
    }
}
body.woocommerce-cart.cart-empty {
    .woocommerce {
        display: block;
        min-height: 50vh;
        width: 100%;
        text-align: center;
        & > p.return-to-shop {
            width: 100%;
            // margin-top: 24rem;
        }
    }
}
body.woocommerce-cart:not(.cart-empty) {
    .woocommerce {
        .return-to-shop {
            min-height: 50vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
[value="Apply coupon"][name="apply_coupon"] {
    font-family: "BlaakRegular_personal";
    font-size: 12.1px;
    font-weight: 900;
    line-height: 11.4px;
    text-align: center;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border-radius: 6px;
    margin-top: 1rem;
    text-transform: lowercase;
    border: 1px solid #fff;
    transition: all 0.1s ease-out;
}
```

## File: assets/sass/_base.scss
```scss
body {
    font-family: $blaak-black-regular;
    background-color: $background-color;
    color: #fff;
    &::before {
        display: none;
    }
    .site-main {
        margin-top: 6rem;
    }
}
```

## File: template-parts/content-footer.php
```php
src="<?php //echo get_template_directory_uri() ?>/assets/images/footer/kirgo-sign.svg"
```

## File: assets/sass/pages/about-us.scss
```scss
// About Us Section
.about-us-title {
    font-family: $black-jack;
    font-size: 19px;
    line-height: 17.8px;
    text-align: left;
    color: #bbcea8;
    margin-bottom: 0.3rem;
    @include mq($from: mobile-md) {
        margin-bottom: 1rem;
    }
    @include mq($from: tablet) {
        text-align: center;
        font-size: 24px;
    }
    @include mq($from: desktop) {
        font-size: 32px;
    }
}
.about-us-text {
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    font-family: BlaakLight;
    font-size: 14px;
    font-weight: 300;
    line-height: 17.8px;
    letter-spacing: 0.2px;
    text-align: left;
    color: #fff;
    padding-left: 10px;
    width: 300px;
    margin-bottom: 0;
    @include mq($from: mobile-md, $until: tablet) {
        width: 85%;
    }
    @include mq($from: tablet) {
        font-size: 18px;
        width: 510px;
        text-align: center;
        margin: 0 auto;
    }
    @include mq($from: desktop) {
        width: 580px;
    }
}
// Story Section
.story-section {
    // .story-section__image
    &__image {
        width: 100%;
        object-fit: cover;
        @include mq($from: tablet) {
            display: none;
        }
    }
    // .story-section__imageDesktop
    &__imageDesktop {
        display: none;
        @include mq($from: tablet) {
            display: block;
            width: 100%;
            height: 90vh;
            object-fit: cover;
            object-position: center;
        }
    }
    // .story-section__wrapper
    &__wrapper {
        padding: 2.5rem 2rem;
        @include mq($from: tablet) {
            padding: 3rem 2rem 4rem;
        }
        @include mq($from: desktop) {
            padding: 4rem 2rem;
        }
    }
    // .story-section__title
    &__title {
    }
    // .story-section__text
    &__text {
    }
}
// Vision Section
.vision-section {
    @include mq($from: tablet) {
        display: flex;
        flex-wrap: wrap;
    }
    // .vision-section__imageWrapper
    &__imageWrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        @include mq($from: tablet) {
            order: 2;
            flex-basis: 50%;
        }
    }
    // .vision-section__image
    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    // .vision-section__imageText
    &__imageText {
        position: absolute;
        width: 180px;
        @include mq($from: desktop) {
            width: 320px;
        }
    }
    // .vision-section__text
    &__text {
        &:nth-child(2) {
            margin: 0 0 2rem 0;
            @include mq($from: tablet) {
                margin: 0 auto;
            }
        }
    }
    // .vision-section__wrapperPresent
    &__wrapperPresent {
        padding: 2rem 2rem 0;
        @include mq($from: tablet) {
            order: 1;
            flex-basis: 50%;
            background-color: #000;
            padding: 2rem;
        }
        @include mq($from: tablet-md) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .vision-section__text {
            @include mq($from: tablet) {
                margin: unset;
                max-width: 300px;
                text-align: left;
            }
            @include mq($from: tablet, $until: tablet-md) {
                width: 100%;
                max-width: 100%;
            }
            @include mq($from: tablet-md) {
                max-width: 380px;
            }
        }
    }
    // .vision-section__wrapperFuture
    &__wrapperFuture {
        padding: 0 2rem 1rem;
        @include mq($from: tablet) {
            order: 3;
            flex-basis: 100%;
            padding: 4rem 0;
        }
    }
    // .vision-section__titlePresent
    &__titlePresent {
        @include mq($from: tablet) {
            text-align: left;
        }
        @include mq($from: tablet-md) {
            transform: translateX(-150px);
        }
    }
    // .vision-section__titleFuture
    &__titleFuture {
    }
}
// Team Section
.team-section {
    margin-bottom: 1rem;
    // .team-section__wrapper
    &__wrapper {
        padding: 0 2rem;
    }
    // .team-section__title
    &__title {
        @include mq($from: tablet) {
            display: none;
        }
    }
    // .team-section__cards
    &__cards {
        display: flex;
        align-items: center;
        margin: 16px 0 0 10px;
        flex-wrap: wrap;
        gap: 0.5rem;
        @include mq($from: tablet) {
            // width: 1000px;
            gap: 1rem;
            margin: 0 auto;
        }
        @include mq($from: desktop) {
            gap: 1.7rem;
            width: 1000px;
        }
    }
    // .team-section__card
    &__card {
        display: flex;
        flex-direction: column;
        flex-basis: 31.5%;
        height: 130px;
        border-radius: 6px;
        overflow: hidden;
        @include mq($from: mobile-md, $until: tablet) {
            height: 200px;
        }
        @include mq($from: tablet, $until: desktop) {
            height: 310px;
            border-radius: 18px;
        }
        @include mq($from: desktop) {
            height: 400px;
            border-radius: 18px;
        }
    }
    // .team-section__memberProfile
    &__memberProfile {
        background-color: #79746a;
        padding: 0.6rem 0.6rem 0.5rem;
        @include mq($from: tablet) {
            padding: 1.5rem 1.5rem 1rem;
        }
    }
    // .team-section__memberName
    &__memberName {
        font-size: 12px;
        font-weight: 800;
        line-height: 0.75;
        color: #fff;
        margin-bottom: 0;
        @include mq($from: tablet) {
            font-size: 24px;
            line-height: 32.9px;
        }
        @include mq($from: desktop) {
            font-size: 35px;
        }
    }
    // .team-section__memberPost
    &__memberPost {
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        font-family: $lekton;
        font-size: 8px;
        font-weight: bold;
        line-height: 1;
        letter-spacing: 0.12px;
        text-align: left;
        color: #fff;
        margin-bottom: 0;
        @include mq($from: tablet) {
            letter-spacing: 0.35px;
            font-size: 16px;
            line-height: 0.5;
        }
        @include mq($from: desktop) {
            font-size: 23.3px;
            line-height: 0.75;
        }
    }
    // .team-section__memberImage
    &__memberImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    // .team-section__joinUs
    &__joinUs {
        background-color: #000;
        align-items: center;
        justify-content: center;
    }
    // .team-section__joinUsIcon
    &__joinUsIcon {
        width: 45px;
        margin-bottom: 1rem;
        @include mq($from: tablet) {
            width: 100px;
            margin-bottom: 3rem;
        }
        @include mq($from: desktop) {
            width: 150px;
        }
    }
    // .team-section__joinUsText
    &__joinUsText {
        font-size: 14px;
        font-weight: 800;
        line-height: 13.1px;
        text-align: center;
        color: #fff;
        margin-bottom: 0;
        @include mq($from: tablet) {
            font-size: 25px;
        }
        @include mq($from: desktop) {
            font-size: 40.9px;
            line-height: 38.4px;
        }
    }
}
.about-us-content {
    padding: 0 1rem;
    text-align: center;
    margin-top: 4rem;
    p {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 300;
        line-height: 17.5px;
        letter-spacing: 0.18px;
        text-align: justify;
        color: #fff;
        @include mq($from: tablet) {
            font-size: 16px;
            line-height: 20.5px;
            letter-spacing: 0.2px;
            max-width: 60%;
            margin: 1rem auto;
        }
    }
    img {
        margin: 1rem 0;
        border-radius: 10px;
        @include mq($from: tablet) {
            min-width: 20rem;
        }
    }
    .ok-buy {
    }
}
```

## File: assets/sass/app.scss
```scss
/*!
Theme Name: Kirgo
Theme URI: http://underscores.me/
Author: Underscores.me
Author URI: http://underscores.me/
Description: Description
Version: 1.0.0
Tested up to: 5.4
Requires PHP: 5.6
License: GNU General Public License v2 or later
License URI: LICENSE
Text Domain: Kirgo
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned.
kirgo is based on Underscores https://underscores.me/, (C) 2012-2020 Automattic, Inc.
Underscores is distributed under the terms of the GNU GPL v2 or later.
Normalizing styles have been helped along thanks to the fine work of
Nicolas Gallagher and Jonathan Neal https://necolas.github.io/normalize.css/
*/
@import "variables";
@import "base";
@import "mixins";
@import "helpers";
@import "components/header";
@import "components/buttons";
@import "components/accordion";
@import "pages/home";
@import "comman-style";
@import "components/footer.scss";
@import "pages/product-single";
@import "pages/about-us";
@import "pages/cart";
@import "pages/checkout";
@import "pages/my-account";
@import "pages/register";
@import "pages/product-listing";
@import "pages/get-in-touch";
```

## File: assets/sass/comman-style.scss
```scss
body.woocommerce-page {
    color: #fff !important;
}
.product {
    // .product__features
    &__features {
        margin-top: 3rem;
        text-align: center;
        order: 1;
        padding: 0 2rem;
        @include mq($from: desktop) {
            max-width: fit-content;
            margin: 5rem auto;
            padding: unset;
        }
        // .product__features-title
        &-title {
            font-family: $blaak;
            font-size: 20px;
            font-weight: 900;
            line-height: 0.77;
            text-align: center;
            color: #fff;
            margin-bottom: 0.5rem;
            @include mq($from: desktop) {
                font-size: 35.4px;
                line-height: 27.4px;
            }
        }
        // .product__features-text
        &-text {
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            font-family: "Poppins";
            font-size: 13px;
            font-weight: bold;
            line-height: 1.37;
            letter-spacing: 0.2px;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            @include mq($from: desktop) {
                font-size: 23px;
                line-height: 31.6px;
            }
        }
        // .product__features-list
        &-list {
            margin-top: 1.5rem;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            gap: 0.5rem;
            @include mq($from: desktop) {
                gap: 1rem;
                margin-top: 2rem;
            }
        }
        // .product__features-item
        &-item {
            border-radius: 8.7px;
            background-color: #050505;
            padding: 1rem 0.5rem;
            min-width: 100px;
            @include mq($from: desktop) {
                min-width: 160px;
                padding: 2.5rem 0.5rem 1.5rem;
            }
            img {
                margin-bottom: 1rem;
                height: 50px;
                width: 45px;
                object-fit: contain;
                @include mq($from: desktop) {
                    margin-bottom: 2rem;
                    height: 55px;
                    width: 75px;
                }
            }
        }
        // .product__features-itemtitle
        &-itemtitle {
            flex-grow: 0;
            font-family: $blaak;
            font-size: 13px;
            font-weight: 900;
            line-height: 0.77;
            text-align: center;
            color: #fff;
            display: block;
            @include mq($from: desktop) {
                font-size: 23px;
                line-height: 17.8px;
            }
        }
    }
    // .product__banner
    &__banner {
        min-height: 130px;
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        left: 0;
        margin-top: 3rem;
        order: 2;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        @include mq($from: desktop) {
            padding: 6rem 0;
        }
        // .product__banner-title
        &-title {
            text-shadow: 0 4.4px 6.6px rgba(0, 0, 0, 0.25);
            font-family: $bebas;
            color: #fff;
            font-size: 26.6px;
            line-height: 0.81;
            letter-spacing: 1px;
            text-align: left;
            text-transform: uppercase;
            max-width: 120px;
            margin-left: 2rem;
            @include mq($from: desktop) {
                letter-spacing: 3px;
                font-size: 105px;
                margin-left: 10rem;
                max-width: 430px;
            }
            @include mq($from: desktop-md) {
                margin-left: 15rem;
            }
        }
        // .product__banner-title
        &-bottom {
            width: 100%;
            position: static;
            order: 4;
            &-title {
                max-width: 150px;
                margin-left: auto;
                margin-right: 1rem;
                font-size: 26.6px;
                line-height: 0.81;
                @include mq($from: desktop) {
                    font-size: 100px;
                    text-shadow: 0 16.4px 24.6px rgb(0 0 0 / 25%);
                    max-width: 500px;
                    margin-right: 6%;
                }
            }
        }
    }
    .duplicate-elements {
        position: sticky;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: #040404;
        z-index: 10;
        display: none;
        justify-content: unset;
        align-items: center;
        padding: 1rem 2rem 4.5rem;
        margin-top: 1rem;
        @include mq($from: desktop) {
            justify-content: center;
            padding: 1rem 0;
            margin-top: 0;
            padding-right: 30%;
        }
        .product-image-side {
            margin-right: 1.5rem;
            @include mq($from: desktop) {
                margin-right: 2rem;
            }
            img {
                height: 100px;
                width: 100px;
                object-fit: cover;
                @include mq($from: desktop) {
                    height: 130px;
                    width: 130px;
                }
            }
        }
        .product-details-side {
            flex-basis: 40%;
        }
        .buy-button {
            .variations_form {
                display: flex;
                .woovr-variations {
                    .woovr-variation-info {
                        height: 40px;
                        @include mq($from: desktop) {
                            height: 55px;
                        }
                    }
                }
            }
        }
        .product_title {
            font-size: 16px;
            margin-bottom: 0.5rem;
            font-weight: 400;
            max-width: unset;
            line-height: 0.94;
            text-align: left;
            color: #fff;
            font-family: $blaak;
            position: relative;
            text-transform: lowercase;
            @include mq($from: desktop) {
                font-size: 28px;
            }
        }
        .product-short-description {
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            font-size: 13px;
            font-weight: bold;
            line-height: 16px;
            height: 32px;
            letter-spacing: 0.2px;
            text-align: left;
            color: #fff;
            max-width: 500px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            @include mq($from: desktop) {
                font-size: 18px;
                margin-bottom: 5px;
            }
        }
        .price {
            display: none;
        }
        .cart {
            .woovr-variations {
                display: flex;
                .woovr-variation {
                    &[data-id="0"],
                    &-selector,
                    &-image,
                    &-price {
                        display: none;
                    }
                    &-name {
                        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                        font-family: $lekton;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 1.37;
                        letter-spacing: 0.27px;
                        text-align: left;
                        color: #fff;
                        border-radius: 3px;
                        border: solid 2px #fff;
                        width: 35px;
                        height: 35px;
                        margin-right: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-top: 3px;
                        transition: all 0.1s ease-out;
                        @include mq($from: desktop) {
                            font-size: 26px;
                            width: 45px;
                            height: 45px;
                        }
                    }
                    &__extra {
                        display: none;
                    }
                    &:hover {
                        background-color: unset;
                        .woovr-variation-name {
                            background-color: #fff;
                            color: #000;
                            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                        }
                    }
                    &-active {
                        .woovr-variation-name {
                            background-color: #fff;
                            color: #000;
                            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                        }
                    }
                }
            }
            .quantity {
                display: none !important;
            }
            .single_add_to_cart_button:not(.wpcbn-btn-single) {
                display: none;
            }
            [name="buy-now"].single_add_to_cart_button {
                font-family: $lekton;
                font-size: 15px;
                font-weight: bold;
                text-align: center;
                color: #000;
                width: auto;
                position: absolute;
                left: 0;
                right: 0;
                margin: 4rem 2rem auto;
                height: 45px;
                line-height: 1;
                border: 1px solid #fff;
                transition: 0.1s ease-out;
                &:hover {
                    color: #fff;
                    border: 1px solid #fff;
                    background-color: #0000;
                }
                @include mq($from: desktop) {
                    font-size: 20px;
                    width: 250px;
                    bottom: 0;
                    top: 0;
                    // left: 70%;
                    margin: auto;
                    height: 50px;
                    left: 55%;
                }
            }
            .accordion {
                display: none;
            }
            .single_variation_wrap {
                .added_to_cart.wc-forward {
                    display: none;
                }
            }
        }
    }
}
@include mq($until: desktop) {
    .home {
        .product {
            // .product__features
            &__features {
                // display: none;
            }
            // .product__banner
            &__banner {
                display: none;
            }
        }
    }
}
.woocommerce-notices-wrapper,
.woocommerce-NoticeGroup {
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    font-family: "Lekton";
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    width: 80%;
    margin: auto;
    z-index: 2;
    ul,
    div {
        padding: 1rem;
        margin: 0;
        li {
            list-style: none;
            margin-bottom: 1rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
.error404 {
    .error-404.not-found {
        padding: 0 2rem;
        font-family: "Lekton";
        margin: 10rem 0 5rem;
    }
    .page-content {
        display: none;
    }
    header.page-header {
        h1.page-title {
            text-align: center;
        }
    }
}
#notifyMePopup {
    .btn-close {
        opacity: 1;
        position: absolute;
        font-size: 1rem;
        z-index: 1;
        top: 10px;
        right: 10px;
        font-weight: 700;
        display: none;
        @include mq($from: desktop) {
            display: block;
            top: 12px;
            right: 12px;
        }
    }
    .model-title {
        font-family: $blaak-black-regular;
        font-size: 14px;
        color: #fff;
        @include mq($from: desktop) {
            font-size: 24px;
        }
    }
    .notify-me-form {
        display: flex;
        border: 1px solid #fff;
        border-radius: 6px;
        overflow: hidden;
        input {
            padding: 0.5rem 0.8rem;
            font-family: $lekton;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: -0.12px;
            text-align: left;
            color: #fff;
            background-color: #0d0c0c;
            min-width: 200px;
            width: 100%;
            flex-basis: 80%;
            border: none;
            @include mq($from: desktop) {
                font-size: 20px;
            }
        }
        .notify-me-button {
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            background-color: #fff;
            -webkit-text-stroke: 0.2px #000;
            font-family: $lekton;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: -0.16px;
            text-align: center;
            color: #000;
            flex-basis: 20%;
            border: none;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            @include mq($from: desktop) {
                font-size: 24px;
            }
        }
    }
    span.wpcf7-not-valid-tip {
        position: absolute;
        top: 50px;
        font-size: 16px;
        text-transform: lowercase;
        @include mq($from: desktop) {
            top: 60px;
            font-size: 20px;
        }
    }
    div.wpcf7-response-output {
        border: none;
        padding: 0;
        font-family: $blaak-black-regular;
        font-size: 16px;
        text-transform: lowercase;
        margin: 1em 0 0;
        @include mq($from: desktop) {
            font-size: 20px;
        }
    }
}
// Hide opacity of the Side Cart overlay
.xoo-wsc-modal {
    display: none;
}
.alternate-cart-products {
    background: #171616;
    margin: 0 -2rem;
    padding: 2rem;
    padding-bottom: 6rem;
    .cart-product-set-text {
        font-family: $blaak-black-regular;
        font-style: normal;
        font-weight: 700;
        font-size: 21.3333px;
        line-height: 93.9%;
        text-align: center;
        color: #ffffff;
        span {
            color: #bbcea8;
        }
    }
    .add-alternate-product-to-cart-text {
        font-family: $lekton;
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 116%;
        text-align: center;
        letter-spacing: 0.015em;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgb(0 0 0 / 25%);
        max-width: 220px;
        margin: 1rem auto 1.5rem;
    }
    ul.products {
        background: #ffffff;
        box-shadow: 0px 1px 32px rgba(0, 0, 0, 0.07);
        border-radius: 9px;
        padding: 8px;
        position: relative;
        &::before {
            position: absolute;
            content: url("/wp-content/themes/kirgo-theme/assets/images/icons/cart_dark.svg");
            z-index: 11;
            top: 10px;
            right: 10px;
        }
        .product {
            display: flex;
            margin: 0;
            height: 130px;
            @include mq($from: desktop) {
                width: unset;
                float: unset;
                height: 140px;
            }
            .cart-product-img {
                img {
                    border-radius: 9px;
                    width: 120px;
                    height: 100%;
                    object-fit: cover;
                    margin-right: 2rem;
                }
            }
            .cart-product-details {
                .cart-product-title {
                    max-width: 135px;
                    @include mq($from: desktop) {
                        line-height: 1;
                    }
                    a {
                        font-family: $blaak-black-regular;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20.7619px;
                        line-height: 0.2;
                        color: #0d0c0c;
                        text-decoration: none;
                        text-transform: lowercase;
                        &::after {
                            content: "";
                            width: 40%;
                            border: 1px solid #000;
                            height: 5px;
                            display: block;
                            border-radius: 5px;
                            margin-top: 0.4rem;
                            @include mq($from: desktop) {
                                height: 6px;
                                margin-top: 1.25rem;
                            }
                        }
                    }
                }
                .woocommerce-product-details__short-description {
                    font-family: $lekton;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: 0.015em;
                    color: #0d0c0c;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    @include mq($from: desktop) {
                        font-size: 16px;
                    }
                }
            }
            .product-size-modal-button {
                position: absolute;
                bottom: -5rem;
                font-family: $lekton;
                font-style: normal;
                font-weight: 700;
                font-size: 15.7895px;
                line-height: 16px;
                color: #ffffff;
                border: 1px solid #ffffff;
                filter: drop-shadow(0px 5px 9px rgba(0, 0, 0, 0.25));
                border-radius: 4.73684px;
                background-color: #0000;
                display: flex;
                width: 100%;
                padding: 1rem 0;
                justify-content: center;
                transition: 0.1s ease-out;
                &:hover {
                    color: #000;
                    border: 1px solid #fff;
                    background-color: #fff;
                    .woocommerce-Price-amount {
                        color: #000;
                    }
                }
                @include mq($from: desktop) {
                    font-size: 20px;
                    line-height: 19px;
                }
                .woocommerce-Price-amount {
                    color: #bbcea8;
                }
            }
        }
        .cart-product-size-modal {
            -webkit-backdrop-filter: blur(7px);
            backdrop-filter: blur(7px);
            background-color: rgba(217, 217, 217, 0.02);
            .modal-dialog {
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                margin: 0;
                top: unset;
                min-height: unset;
                @include mq($from: desktop) {
                    position: unset;
                    margin: auto;
                    min-height: -webkit-fill-available;
                }
                .modal-content {
                    background-color: #000;
                    padding: 2rem;
                    .modal-body {
                        padding: 0;
                        .modal-title {
                            font-family: $blaak-black-regular;
                            font-size: 21px;
                            font-weight: 900;
                            line-height: 1.2;
                            text-align: center;
                            color: #fff;
                            text-transform: lowercase;
                            margin-bottom: 1rem;
                            @include mq($from: desktop) {
                                font-size: 30px;
                            }
                            span {
                                color: #bbcea8;
                            }
                        }
                    }
                }
            }
            .cart {
                .woovr-variations {
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    width: 75%;
                    @include mq($from: desktop) {
                        width: 65%;
                    }
                    .woovr-variation {
                        &[data-id="0"],
                        &-selector,
                        &-image,
                        &-price {
                            display: none;
                        }
                        &-name {
                            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            font-family: $lekton;
                            font-size: 35px;
                            font-weight: bold;
                            line-height: 1.37;
                            letter-spacing: 0.27px;
                            text-align: left;
                            color: #fff;
                            border-radius: 6px;
                            border: solid 4px #fff;
                            width: 70px;
                            height: 70px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-top: 3px;
                            transition: all 0.1s ease;
                            @include mq($from: desktop) {
                                font-size: 37px;
                                width: 80px;
                                height: 80px;
                            }
                        }
                        &__extra {
                            display: none;
                        }
                        &:hover {
                            background-color: unset;
                            .woovr-variation-name {
                                background-color: #fff;
                                color: #000;
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            }
                        }
                        &-active {
                            .woovr-variation-name {
                                background-color: #fff;
                                color: #000;
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            }
                        }
                    }
                }
                .single_variation_wrap {
                    .added_to_cart.wc-forward {
                        display: none;
                    }
                }
                .quantity {
                    display: none !important;
                }
                .single_add_to_cart_button:not(.wpcbn-btn-single) {
                    display: none;
                }
                [name="buy-now"].single_add_to_cart_button {
                    font-family: $blaak-black-regular;
                    font-size: 14px;
                    font-weight: 900;
                    line-height: 3.5;
                    text-align: center;
                    color: #000;
                    padding: 0;
                    text-transform: lowercase;
                    border: 1px solid #fff;
                    transition: 0.1s ease-out;
                    &:hover {
                        color: #fff;
                        border: 1px solid #fff;
                        background-color: #0000;
                    }
                    @include mq($from: desktop) {
                        font-size: 24px;
                        line-height: 2.5;
                    }
                }
                .accordion {
                    display: none;
                }
            }
        }
    }
}
.woocommerce-checkout {
    .alternate-cart-products {
        width: 100%;
        margin: 0;
    }
}
body.xoo-wsc-cart-active,
html.xoo-wsc-cart-active {
    overflow: unset !important;
}
/********
* Blog Page
*********/
.single-post {
    article.post {
        font-family: $lekton;
    }
    .entry-header {
        padding: 0 2rem 2rem;
        @include mq($from: desktop) {
            width: 75%;
            margin: auto;
        }
        h1 {
            font-weight: 600;
        }
        .entry-meta {
            margin-top: 1rem;
            @include mq($from: desktop) {
                font-size: 24px;
            }
            a {
                color: #fff;
                pointer-events: none;
                text-decoration: none;
            }
            .posted-on {
                .updated {
                    display: none;
                }
            }
        }
    }
    .post-thumbnail {
        width: 100%;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            @include mq($from: desktop) {
                height: 300px;
            }
        }
        .placeholder-image {
            opacity: 0.6;
        }
    }
    .entry-content {
        padding: 2rem;
        @include mq($from: desktop) {
            width: 75%;
            margin: auto;
            font-size: 24px;
        }
    }
    .navigation {
        padding: 0 2rem;
        font-family: $lekton;
        @include mq($from: desktop) {
            width: 75%;
            margin: auto;
            font-size: 24px;
        }
        .nav-links {
            a {
                font-weight: 700;
            }
        }
        a {
            color: #fff;
        }
    }
    #comments,
    .entry-footer {
        display: none;
    }
}
/********
* Share Icons
*********/
.product-share-modal-button {
    background-color: #0000;
    border: none;
    position: absolute;
    top: 32.9rem;
    right: 2rem;
    @include mq($from: desktop) {
        top: -2.5rem;
        right: 0;
    }
}
#productShareIcons,
#notifyMePopup,
.product-share-modal {
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    background-color: rgba(217, 217, 217, 0.02);
    .modal-dialog {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        margin: 0;
        top: unset;
        min-height: unset;
        @include mq($from: desktop) {
            position: unset;
            margin: auto;
            min-height: -webkit-fill-available;
        }
        .modal-content {
            background-color: #000;
            padding: 2rem;
            border-radius: 9px;
            .modal-body {
                padding: 0;
                .modal-title {
                    font-family: $blaak-black-regular;
                    font-size: 21px;
                    font-weight: 900;
                    line-height: 1.2;
                    text-align: center;
                    color: #fff;
                    text-transform: lowercase;
                    margin-bottom: 1rem;
                    @include mq($from: desktop) {
                        font-size: 30px;
                    }
                    span {
                        color: #bbcea8;
                    }
                }
                .psfw-social-wrap {
                    justify-content: center;
                    ul.psfw-social-icons {
                        margin: 0;
                        li {
                            a {
                                color: #fff;
                                border: none;
                                font-size: 2.5rem;
                                width: 50px;
                                height: 50px;
                            }
                        }
                    }
                }
            }
        }
    }
}
// Login/Register Popup
@include mq($from: desktop) {
    .xoo-el-container {
        .xoo-el-modal {
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0, 0, 0.54);
            .xoo-el-inmodal {
                max-height: unset;
                height: auto;
                .xoo-el-srcont {
                    border-radius: 10px;
                }
                .xoo-el-icon-cancel-circle {
                    right: 9px;
                    top: 3px;
                    background-color: unset;
                    border-radius: unset;
                    border: none;
                    &:hover {
                        color: unset;
                    }
                    &::before {
                        content: "\00d7";
                        color: #000;
                    }
                }
                .scroll-content {
                    .xoo-el-main {
                        .xoo-el-title {
                            display: none;
                            font-family: $blaak-black-regular;
                            font-size: 26.3px;
                            font-weight: 900;
                            line-height: 24.7px;
                            text-align: left;
                            color: #0d0c0c;
                            position: relative;
                            margin-bottom: 1rem;
                            text-transform: lowercase;
                            &::before {
                                content: url("/wp-content/themes/kirgo-theme/assets/images/icons/left-arrow.svg");
                                margin-right: 10px;
                            }
                        }
                        [data-active="login"] {
                            .xoo-el-title.login-title {
                                display: block;
                            }
                        }
                        [data-active="register"] {
                            .xoo-el-title.register-title {
                                display: block;
                            }
                        }
                        .xoo-el-form-container {
                            padding-bottom: 0;
                            .xoo-el-header {
                                display: none;
                            }
                            a.xoo-el-action-sc {
                                border-radius: 6px;
                                border: solid 1px #000;
                                font-family: $blaak-black-regular;
                                font-size: 15px;
                                font-weight: 900;
                                line-height: 11.4px;
                                text-align: center;
                                width: calc(100% - 20px);
                                padding: 1rem 0;
                                color: #000;
                                background-color: #fff;
                                display: flex;
                                justify-content: center;
                                text-decoration: none;
                                margin-bottom: 1rem;
                                transition: 0.1s ease-out;
                                &:hover {
                                    color: #fff;
                                    border: 1px solid #fff;
                                    background-color: #000;
                                }
                            }
                            .xoo-aff-group {
                                input {
                                    padding: 1rem;
                                    line-height: 1;
                                    border-radius: 6px;
                                    font-family: $lekton;
                                    font-size: 15px;
                                    font-weight: bold;
                                    letter-spacing: -0.14px;
                                    text-align: left;
                                    color: #000;
                                    text-transform: lowercase;
                                    -webkit-backdrop-filter: blur(4.9px);
                                    backdrop-filter: blur(4.9px);
                                    border: solid 0.3px rgba(13, 12, 12, 0.6);
                                    background-color: rgba(13, 12, 12, 0);
                                }
                                a {
                                    @include mq($from: desktop) {
                                        color: #000;
                                        transition: all 0.1s ease-out;
                                        &:hover {
                                            color: #bbcea8;
                                        }
                                    }
                                }
                            }
                            .xoo-el-action-form {
                                margin-right: -20px;
                            }
                            .xoo-el-section {
                                padding: 0;
                                .button.btn {
                                    font-family: $blaak-black-regular;
                                    margin: 0 0 16px 0;
                                    text-transform: lowercase;
                                    border: 1px solid #000;
                                    transition: 0.1s ease-out;
                                    &:hover {
                                        background-color: #fff;
                                        color: #000;
                                    }
                                }
                            }
                            .xoo-el-login-btm-fields {
                                .xoo-el-lostpw-tgr {
                                    margin: auto 0 0 0;
                                    opacity: 0.7;
                                    font-size: 15px;
                                    font-weight: 100;
                                    line-height: 17.9px;
                                    letter-spacing: 0.2px;
                                    color: #0d0c0c;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.woocommerce-cart {
    .woocommerce {
        .alternate-cart-products {
            @include mq($from: desktop) {
                background: unset;
                margin: 0;
                max-width: 400px;
            }
            @include mq($from: desktop-xl) {
                max-width: 460px;
            }
            .cart-product-set-text {
                @include mq($from: desktop) {
                    margin-bottom: 1rem;
                    font-size: 18px;
                    text-align: left;
                }
                br {
                    @include mq($from: desktop) {
                        display: none;
                    }
                }
            }
            .add-alternate-product-to-cart-text {
                @include mq($from: desktop) {
                    display: none;
                }
            }
            ul.products {
                .product {
                    .cart-product-details {
                        .cart-product-title {
                            a {
                                @include mq($from: desktop) {
                                    font-size: 25px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.woocommerce-checkout {
    .woocommerce {
        .alternate-cart-products {
            @include mq($from: desktop) {
                display: none;
            }
        }
    }
}
body.page-id-425,
body.page-id-10,
body.page-id-432,
body.page-id-436 {
    background-color: #bbcea8;
    main.site-main {
        @media (max-width: 1024px) {
            padding: 0 2rem;
        }
        // @include mq($until: 1024px) {
        //     padding: 0 2rem;
        // }
    }
    .entry-header {
        h1.entry-title {
            font-size: 124.6px;
            font-weight: 900;
            line-height: 1.25;
            letter-spacing: 1.87px;
            text-align: justify;
            color: #8b9b7b;
            margin: auto;
            max-width: 950px;
            margin-top: 16rem;
            text-align: left;
            @media (max-width: 1024px) {
                font-size: 2.5em;
                margin-top: 10rem;
            }
            // @include mq($until: desktop) {
            //     font-size: 2.5em;
            //     line-height: 1;
            //     margin-top: 10rem;
            // }
        }
    }
    .entry-content {
        max-width: 950px;
        margin: auto;
        font-family: $lekton;
        margin-top: 4rem;
        font-size: 18px;
        font-weight: 700;
        line-height: 25.5px;
        letter-spacing: 0.27px;
        text-align: left;
        color: #0d0c0c;
        // @include mq($until: desktop) {
        //     font-size: 16px;
        // }
        @media (max-width: 1024px) {
            font-size: 16px;
        }
        a {
            color: #000;
        }
    }
    .footer-section {
        background-color: #0d0c0c;
        padding-top: 4rem;
        margin-top: 10rem;
        .footer-section__image {
            display: none;
        }
    }
}
```

## File: assets/sass/_variables.scss
```scss
@import "./helpers/mq";
/******************************************
    Responsive Rules Using MQ-SASS
    https://github.com/sass-mq/sass-mq
******************************************/
// To enable support for browsers that do not support @media queries,
// (IE <= 8, Firefox <= 3, Opera <= 9) set $mq-responsive to false
// Create a separate stylesheet served exclusively to these browsers,
// meaning @media queries will be rasterized, relying on the cascade itself
$mq-responsive: true;
// Name your breakpoints in a way that creates a ubiquitous language
// across team members. It will improve communication between
// stakeholders, designers, developers, and testers.
$mq-breakpoints: (
    small: 350px,
    mobile: 500px,
    mini: 769px,
    pro: 1025px,
    desktop: 1280px,
    wide: 1300px,
    // Tweakpoints
    desktopAd: 810px,
    mobileLandscape: 480px,
);
// Define the breakpoint from the $mq-breakpoints list that should
// be used as the target width when outputting a static stylesheet
// (when $mq-responsive is set to 'false').
$mq-static-breakpoint: desktop;
// If you want to display the currently active breakpoint in the top
// right corner of your site during development, add the breakpoints
// to this list, ordered by width. For example: (mobile, tablet, desktop).
$mq-show-breakpoints: (mobile, mini, pro, desktop, wide);
// Font Variables
@font-face {
    font-family: "BlaakLight_personl";
    src: url("/wp-content/themes/kirgo-theme/assets/fonts/BlaakBlack/Blaak-Light.ttf");
}
@font-face {
    font-family: "BlaakRegular_personal";
    src: url("/wp-content/themes/kirgo-theme/assets/fonts/BlaakBlack/Blaak-Regular.ttf");
}
@font-face {
    font-family: "BlaakThin_personal";
    src: url("/wp-content/themes/kirgo-theme/assets/fonts/BlaakBlack/Blaak-Thin.ttf");
}
@font-face {
    font-family: "BlackJack";
    src: url("/wp-content/themes/kirgo-theme/assets/fonts/BlackJack/BLACKJAR.TTF");
}
@font-face {
    font-family: "Bebas";
    src: url("/wp-content/themes/kirgo-theme/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf");
}
$lekton: "Poppins";
$blaak-black-light: "BlaakLight_personl";
$blaak-black-regular: "BlaakRegular_personal";
$blaak-black-thin: "BlaakThin_personal";
$blaak: $blaak-black-regular;
$blaakLight: $blaak-black-light;
$black-jack: "BlackJack";
$bebas: "Bebas";
$background-color: #0d0c0c;
// tmm = toggle mobile menu
$tmm_height: 23px;
$tmm_stroke_width: 3px;
$tmm_width: 25px;
$tmm_color: #ffffff;
$tmm_activ_color: #fff;
$tmm_v_padding: 5px;
$tmm_h_padding: 5px;
$tmm_border_radius: 1px;
// Stop editing!
$tmm_real_height: $tmm_height + ($tmm_v_padding * 2);
$tmm_real_width: $tmm_width + ($tmm_h_padding * 1);
$tmm_stroke_space: ($tmm_height - ($tmm_stroke_width * 3)) / 2;
$tmm_mid_top: $tmm_stroke_space + $tmm_stroke_width + $tmm_v_padding;
/*******************************************
    Variables
/*******************************************/
```

## File: template-parts/content-header.php
```php
<?php // echo do_shortcode('[xoo_el_action type="login" text="" change_to="/my-account"]') ?>
⋮----
// $count = WC()->cart->get_cart_contents_count();
// if ( $count > 0 ) {
//     echo '<span class="cart-count">' . esc_html( $count ) . '</span>';
// }
⋮----
// Fetching product price dynamically
⋮----
$sports_bra_price = $sports_bra->get_price();
$leggings_price = $leggings->get_price();
⋮----
<?php echo $product->get_image('medium'); ?>
⋮----
<?php echo esc_html($product->get_title()); ?>
```

## File: functions.php
```php
/**
 * Kirgo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kirgo
 */
⋮----
// Replace the version number of the theme on each release.
⋮----
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function kirgo_setup() {
/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on kirgo, use a find and replace
		* to change 'kirgo' to the name of your theme in all the template files.
		*/
⋮----
// Add default posts and comments RSS feed links to head.
⋮----
/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
⋮----
/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
⋮----
// This theme uses wp_nav_menu() in one location.
⋮----
/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
⋮----
// Set up the WordPress core custom background feature.
⋮----
// Add theme support for selective refresh for widgets.
⋮----
/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
⋮----
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function kirgo_content_width() {
⋮----
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function kirgo_widgets_init() {
⋮----
/**
 * Enqueue scripts and styles.
 */
function kirgo_scripts() {
⋮----
// app js
⋮----
/**
 * Implement the Custom Header feature.
 */
⋮----
/**
 * Custom template tags for this theme.
 */
⋮----
/**
 * Functions which enhance the theme by hooking into WordPress.
 */
⋮----
/**
 * Customizer additions.
 */
⋮----
/**
 * Load Jetpack compatibility file.
 */
⋮----
/**
 * Load WooCommerce compatibility file.
 */
⋮----
/**
 * Load Guternberg editor for Woocommerce products
 */
// Enable Gutenberg editor for WooCommerce
// function j0e_activate_gutenberg_product( $can_edit, $post_type ) {
// 	if ( $post_type == 'product' ) {
// 		   $can_edit = true;
// 	   }
// 	   return $can_edit;
//    }
//    add_filter( 'use_block_editor_for_post_type', 'j0e_activate_gutenberg_product', 10, 2 );
//    // enable taxonomy fields for woocommerce with gutenberg on
//    function j0e_enable_taxonomy_rest( $args ) {
// 	   $args['show_in_rest'] = true;
// 	   return $args;
⋮----
//    add_filter( 'woocommerce_taxonomy_args_product_cat', 'j0e_enable_taxonomy_rest' );
//    add_filter( 'woocommerce_taxonomy_args_product_tag', 'j0e_enable_taxonomy_rest' );
/***********************
 * Single Product
 ***********************/
⋮----
// Show Buttons on Cart quantity input
⋮----
function display_quantity_plus() {
⋮----
function display_quantity_minus() {
⋮----
/***********************
 * Cart Page
 ***********************/
// Chnaged the cart total title text
⋮----
function custom_cart_totals_title( $translated_text, $text, $domain ) {
⋮----
// Add custom text with hyperlink before "Proceed to Checkout" button on cart page
⋮----
function add_custom_text_with_hyperlink_before_checkout_button() {
⋮----
/***********************
 * Checkout Page
 ***********************/
// Changed the checkout order title text
⋮----
function woocommerce_checkout_before_order_review_heading( $translated_text, $text, $domain ) {
⋮----
function add_duplicate_content() {
⋮----
// Product Image
⋮----
echo $product->get_image();
⋮----
// Product Title
⋮----
echo '<h1 class="product_title">'.$product->get_name().'</h1>';
⋮----
// Short Description
⋮----
echo $product->get_short_description();
⋮----
// Buy Button
⋮----
// Notify me modal on detail page
⋮----
function add_modal_content() {
⋮----
// Show Alternate Products on Cart Page
// add_action( 'woocommerce_cart_collaterals', 'display_related_products_on_cart_page' );
// Display related products on the cart page
⋮----
function display_related_products_on_cart_page() {
⋮----
// Display related products on the checkout page
⋮----
function display_related_products_on_checkout_page() {
⋮----
function display_related_products() {
// Get the current product IDs from the cart
⋮----
foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
⋮----
// Check if product with ID 438 is in the cart
⋮----
// Query for related products based on the current product IDs
⋮----
// Display the related products
if ( $related_query->have_posts() && !$set_product_id_438_in_cart ) {
⋮----
while ( $related_query->have_posts() ) {
$related_query->the_post();
⋮----
echo '<a href="' . esc_url( get_permalink() ) . '" class="cart-product-img">' . $product->get_image() . '</a>';
⋮----
echo '<button href="#" class="product-size-modal-button" data-bs-toggle="modal" data-bs-target="#product-size-modal-' . get_the_ID() . '">Add for&nbsp;' . $product->get_price_html() . '</button>';
⋮----
// Product size modal
⋮----
// Reset the post data
⋮----
function get_variation_price( $variation_id ) {
⋮----
return $variation->get_price_html();
⋮----
// share icons modal on detail page
⋮----
function add_share_icons_modal() {
⋮----
// Redirect to home page after WooCommerce logout
function redirect_after_woocommerce_logout() {
⋮----
/**
 * Hide shipping rates when free shipping is available.
 * Updated to support WooCommerce 2.6 Shipping Zones.
 */
function my_hide_shipping_when_free_is_available( $rates ) {
⋮----
// Add a class to the body tag if cart is empty
function add_class_if_cart_empty($classes) {
if (WC()->cart->is_empty()) {
⋮----
// Add Cash on Delivery (COD) charges
// add_action( 'woocommerce_cart_calculate_fees', 'add_cod_fee' );
// function add_cod_fee() {
//     if ( 'cod' === WC()->session->chosen_payment_method ) {
//         $cod_fee = 50; // Set the COD fee amount here
//         WC()->cart->add_fee( 'Cash on delivery Fee', $cod_fee, true );
//     }
// }
// Avoid blur images
⋮----
function custom_update_cart_button_text($translated_text, $text, $domain) {
// Check if the text domain is "woocommerce"
⋮----
// Check if the original text is "Update Cart"
⋮----
// Replace it with your desired text
⋮----
// Added Poppins font
function enqueue_custom_fonts() {
⋮----
// Rename buttons
function custom_woocommerce_messages( $message, $text, $domain ) {
⋮----
// Change "Browse Products" text
⋮----
// Change "No orders found." message
⋮----
function ajay_add_summer_collection_body_class( $classes ) {
⋮----
if ( $product && has_term( 'summer-collection', 'product_cat', $product->get_id() ) ) {
⋮----
function custom_add_to_cart_redirect($url) {
return wc_get_cart_url(); // Redirects to cart page
```

## File: template-parts/template-home.php
```php
<?php /* Template Name: Homepage */ ?>
⋮----
><?php // the_sub_field('slider_text'); ?></span
⋮----
// Fetching product details dynamically
⋮----
$sports_bra_name = $sports_bra->get_name();
$leggings_name = $leggings->get_name();
$sports_bra_short_desc = $sports_bra->get_short_description();
$leggings_short_desc = $leggings->get_short_description();
$sports_bra_price = $sports_bra->get_price();
$leggings_price = $leggings->get_price();
$sports_bra_image = $sports_bra->get_image();
$leggings_image = $leggings->get_image();
// Get Add to Cart URL
$sports_bra_cart_url = $sports_bra->add_to_cart_url();
$leggings_cart_url = $leggings->add_to_cart_url();
⋮----
// Get first gallery image
⋮----
// Function for reading time
function readingTime() {
⋮----
// Display the featured image
⋮----
// Display a placeholder image
```

## File: assets/sass/pages/product-single.scss
```scss
body.single-product {
    font-family: $lekton;
    color: #fff;
    .site-main {
        margin-top: 0rem;
        @include mq($from: desktop) {
            margin-top: 11rem;
        }
    }
    .woocommerce-breadcrumb {
        display: none;
    }
    .woocommerce-notices-wrapper {
        position: absolute;
        z-index: 11111;
        top: 6rem;
        right: 3%;
        width: 300px;
        @include mq($from: desktop) {
            top: 8rem;
            right: unset;
            left: 70%;
        }
        div {
            font-size: 1em;
            background: #fff;
            color: #000;
            padding: 1rem;
            border-radius: 7px;
            margin-bottom: 1rem;
        }
    }
    .product {
        @include mq($from: desktop) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .woocommerce-product {
            &-side__note {
                position: absolute;
                left: 20px;
                bottom: 30px;
                transform: rotate(-90deg);
                font-size: 13px;
                font-style: italic;
                line-height: 0.94;
                text-align: left;
                transform-origin: left;
                z-index: 10;
                @include mq($from: desktop) {
                    left: -20px;
                    bottom: 15px;
                }
            }
            &-details {
                &__short-description {
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                    font-size: 13px;
                    font-weight: bold;
                    line-height: 1.37;
                    letter-spacing: 0.2px;
                    text-align: left;
                    color: #fff;
                    @include mq($from: desktop) {
                        font-size: 18px;
                        margin-bottom: 2rem;
                    }
                }
            }
        }
        .woocommerce-product-gallery {
            width: 100%;
            margin-bottom: 1rem;
            @include mq($from: desktop) {
                margin-bottom: 0;
                flex-basis: 40%;
                width: unset;
            }
            @include mq($from: desktop-lg) {
                flex-basis: 45%;
            }
            .flex-viewport {
                @include mq($from: desktop) {
                    height: 100% !important;
                }
                .wp-post-image,
                img {
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    height: 500px;
                    @include mq($from: desktop) {
                        overflow: visible;
                    }
                }
            }
            .flex-control-nav.flex-control-thumbs {
                position: absolute;
                right: 30px;
                bottom: 20px;
                display: flex;
                flex-direction: column;
                @include mq($from: desktop) {
                    top: 0;
                    left: -60px;
                    right: unset;
                    bottom: unset;
                }
                li {
                    img {
                        width: 30px;
                        height: 30px;
                        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
                        border: solid 2px rgba(255, 255, 255, 0.31);
                        background-color: rgba(255, 255, 255, 0.31);
                        border-radius: 6px;
                        margin-bottom: 1rem;
                        @include mq($from: desktop) {
                            width: 45px;
                            height: 45px;
                        }
                    }
                }
            }
            a.woocommerce-product-gallery__trigger {
                display: none;
            }
        }
        .summary {
            padding: 0 2rem;
            @include mq($from: desktop) {
                flex-basis: 40%;
                padding: 0 0 0 2rem;
                position: relative;
            }
            @include mq($from: desktop-lg) {
                max-width: 500px;
            }
            .product_title {
                font-size: 36px;
                font-weight: 900;
                line-height: 0.94;
                text-align: left;
                color: #fff;
                font-family: $blaak;
                margin-bottom: 1.7rem;
                position: relative;
                text-transform: lowercase;
                max-width: 80%;
                @include mq($from: desktop) {
                    font-size: 50px;
                    margin-bottom: 2.2rem;
                }
                &::after {
                    position: relative;
                    content: "";
                    left: 0;
                    bottom: -10px;
                    width: 30%;
                    height: 5px;
                    border: 1px solid #fff;
                    display: none;
                    border-radius: 5px;
                    @include mq($from: desktop) {
                        height: 8px;
                        width: 120px;
                        bottom: -20px;
                    }
                }
            }
            .price {
                display: none;
            }
            .cart {
                .woovr-variations {
                    display: flex;
                    .woovr-variation {
                        &[data-id="0"],
                        &-selector,
                        &-image,
                        &-price {
                            display: none;
                        }
                        &-name {
                            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            font-family: $lekton;
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 1.37;
                            letter-spacing: 0.27px;
                            text-align: left;
                            color: #fff;
                            border-radius: 3px;
                            border: solid 2px #fff;
                            width: 40px;
                            height: 40px;
                            margin-right: 1rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-top: 3px;
                            transition: all 0.1s ease;
                            @include mq($from: desktop) {
                                font-size: 26px;
                                width: 50px;
                                height: 50px;
                            }
                        }
                        &__extra {
                            display: flex;
                            flex-direction: column;
                            margin-top: 0.4rem;
                            margin-left: 0.5rem;
                            &-title {
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                font-family: $lekton;
                                font-size: 13px;
                                line-height: 1.37;
                                letter-spacing: 0.2px;
                                text-align: left;
                                color: #7b7b7b;
                                @include mq($from: desktop) {
                                    font-size: 18px;
                                }
                            }
                            &-link {
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                font-family: $lekton;
                                font-size: 16px;
                                font-weight: bold;
                                line-height: 1.37;
                                letter-spacing: 0.24px;
                                text-align: left;
                                color: #fff;
                                text-decoration: none;
                                background-color: #0000;
                                border: none;
                                padding: 0;
                                @include mq($from: desktop) {
                                    font-size: 23px;
                                }
                                &::after {
                                    content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow-white.svg");
                                    display: inline-block;
                                    margin-left: 0.4rem;
                                    transform: scale(0.7) translateY(2px);
                                }
                                &:hover {
                                    color: #bbcea8;
                                }
                            }
                        }
                        &:hover {
                            background-color: unset;
                            .woovr-variation-name {
                                background-color: #fff;
                                color: #000;
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            }
                        }
                        &-active {
                            .woovr-variation-name {
                                background-color: #fff;
                                color: #000;
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                            }
                        }
                    }
                }
                .single_variation_wrap {
                    .added_to_cart.wc-forward {
                        display: none;
                    }
                }
                .quantity {
                    display: none !important;
                }
                .single_add_to_cart_button:not(.wpcbn-btn-single) {
                    // display: none;
                    // position: absolute;
                    border: none;
                    border-radius: 5px;
                    line-height: 1;
                    top: 0;
                    color: #000;
                    right: 0;
                    z-index: 11;
                    font-size: 1rem;
                    background-color: #fff;
                    padding: unset;
                    width: 100%;
                    height: 50px;
                    margin-bottom: 1rem;
                    position: relative;
                    font-family: "Poppins";
                    font-size: 15px;
                    font-weight: 700;
                    &:hover {
                        background-color: #000;
                        transition: 0.05s ease-out;
                        border: 1px solid #fff;
                    }
                    @include mq($from: desktop) {
                        top: 0rem;
                        color: #000;
                        right: 0;
                        width: 100%;
                        height: 60px;
                        font-size: 23.1px;
                        font-weight: 700;
                        letter-spacing: -0.18px;
                        background-color: #fff;
                        text-transform: lowercase;
                        padding: 0.75rem 1.5rem 0.75rem 3rem;
                    }
                    // &::before {
                    //     position: absolute;
                    //     content: "add to cart";
                    //     top: -50%;
                    //     left: -50%;
                    //     width: 100%;
                    //     transform: translate(50%, 50%);
                    //     @include mq($from: desktop) {
                    //         top: 8px;
                    //         left: 1.2rem;
                    //         width: unset;
                    //         transform: scale(0.9);
                    //     }
                    // }
                    &:hover {
                        color: #fff;
                    }
                }
                [name="buy-now"].single_add_to_cart_button {
                    flex-grow: 0;
                    font-family: $lekton;
                    font-size: 15px;
                    font-weight: bold;
                    text-align: center;
                    color: #000;
                    border: 1px solid #fff;
                    transition: 0.05s ease-out;
                    &:hover {
                        color: #fff;
                        border: 1px solid #fff;
                        background-color: #0000;
                    }
                    @include mq($from: desktop) {
                        font-size: 23.1px;
                    }
                }
            }
            .product_meta {
                display: none;
            }
        }
        .woocommerce-tabs {
            // padding: 0 2rem;
            display: flex;
            flex-direction: column;
            @include mq($from: desktop) {
                flex-basis: 100%;
                margin-bottom: 3rem;
            }
            .wc-tabs {
                display: none;
            }
            .woocommerce-Tabs-panel {
                order: 3;
            }
        }
        .woocommerce-Reviews {
            @include mq($from: desktop) {
                margin: 5rem 0 2rem;
            }
            &-title {
                flex-grow: 0;
                font-family: $blaak;
                font-size: 14px;
                font-weight: 900;
                line-height: 0.94;
                text-align: left;
                color: #fff;
                margin-left: 2rem;
                display: block;
                margin-top: 2rem;
                text-transform: lowercase;
                @include mq($from: desktop) {
                    text-align: center;
                    margin-left: 0;
                    font-size: 35.4px;
                }
            }
            .commentlist {
                padding: 0;
                margin-left: 1.5rem;
                margin-top: 1rem;
                @include mq($from: desktop) {
                    margin-top: 2rem;
                    margin-left: 20rem;
                }
                .flickity-viewport {
                    .flickity-slider {
                        display: flex;
                        align-items: center;
                    }
                }
                .comment,
                .review {
                    list-style-type: none;
                    text-align: center;
                    width: 70%;
                    margin-right: 0.7rem;
                    border-radius: 8px;
                    border: solid 1px #050505;
                    background-color: #050505;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem 1rem;
                    @include mq($from: desktop) {
                        max-width: 450px;
                        min-height: 225px;
                        padding: 2rem 2.5rem;
                    }
                    img {
                        display: none;
                    }
                    &-text {
                        display: flex;
                        flex-direction: column;
                        .meta {
                            order: 2;
                        }
                        .description {
                            font-family: $blaak;
                            font-size: 20px;
                            font-weight: 900;
                            line-height: 1.18;
                            text-align: center;
                            color: #fff;
                            margin: 1rem auto 0;
                            @include mq($from: desktop) {
                                font-size: 32px;
                            }
                            p {
                                margin-bottom: 0.5rem;
                            }
                        }
                    }
                    .woocommerce-review {
                        &__dash {
                            display: none;
                        }
                        &__published-date {
                            display: none;
                        }
                        &__author {
                            font-size: 13px;
                            font-weight: bold;
                            line-height: 1.37;
                            letter-spacing: 0.2px;
                            text-align: left;
                            color: rgba(255, 255, 255, 0.5);
                            @include mq($from: desktop) {
                                font-size: 23.6px;
                            }
                        }
                    }
                }
            }
            #review_form_wrapper {
                margin: 3rem 0 0;
            }
            .comment-respond {
                .comment-reply-title {
                    border-radius: 4.7px;
                    box-shadow: 0 5px 9px 0 rgb(0 0 0 / 25%);
                    background-color: #fff;
                    display: flex;
                    margin: 0 2rem;
                    padding: 0.7rem 0;
                    align-items: center;
                    justify-content: center;
                    font-family: $lekton;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    color: #000;
                    cursor: pointer;
                    transition: 0.1s ease-out;
                    &:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    @include mq($from: desktop) {
                        max-width: 500px;
                        margin: auto;
                        font-size: 22px;
                        box-shadow: 0 9.1px 16.3px 0 rgb(0 0 0 / 25%);
                        border: solid 1px #fff;
                        background-color: #0000;
                        color: #fff;
                        border-radius: 8.6px;
                    }
                }
                .comment-form {
                    display: none;
                    padding: 0 2rem;
                    margin-top: 1rem;
                    font-family: $blaak-black-regular;
                    @include mq($from: desktop) {
                        max-width: 1000px;
                        margin: 3rem auto 0;
                        // display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    .comment-notes {
                        flex-basis: 100%;
                    }
                    .comment-form-author input,
                    .comment-form-email input,
                    textarea {
                        width: 100%;
                        border-radius: 5px;
                        font-family: $lekton;
                        padding: 0.5rem 0.8rem;
                        font-size: 12px;
                        letter-spacing: -0.12px;
                        color: #fff;
                        background-color: #0d0c0c;
                        border: 1px solid #fff;
                        @include mq($from: desktop) {
                            font-size: 18px;
                            text-transform: lowercase;
                        }
                    }
                    .comment-form-comment {
                        order: 4;
                        flex-basis: 100%;
                    }
                    textarea {
                        height: 100px;
                    }
                    .comment-form-author,
                    .comment-form-email {
                        flex-basis: 48%;
                    }
                    .comment-form-cookies-consent {
                        order: 5;
                        flex-basis: 100%;
                    }
                    .form-submit {
                        order: 6;
                        flex-basis: 100%;
                    }
                    .comment-form-author input,
                    .comment-form-email input {
                        @include mq($from: desktop) {
                            height: 40px;
                        }
                    }
                    .submit {
                        font-family: $blaak-black-regular;
                        border-radius: 4.7px;
                        box-shadow: 0 5px 9px 0 rgb(0 0 0 / 25%);
                        background-color: #fff;
                        padding: 0.7rem 0;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                        color: #000;
                        width: 100%;
                        text-transform: lowercase;
                        border: 1px solid #fff;
                        transition: 0.1s ease-out;
                        &:hover {
                            color: #fff;
                            border: 1px solid #fff;
                            background-color: #0000;
                        }
                        @include mq($from: desktop) {
                            font-size: 22px;
                            display: flex;
                            justify-content: center;
                            margin: 1rem 0 0 auto;
                            width: 48%;
                        }
                    }
                    span,
                    label {
                        @include mq($from: desktop) {
                            font-size: 18px;
                            text-transform: lowercase;
                        }
                    }
                    .required {
                        display: none;
                    }
                }
            }
        }
        // .product__owner
        &__owner {
            &-words {
                opacity: 0.7;
                font-family: $blaakLight;
                font-size: 13px;
                font-weight: 100;
                line-height: 1.37;
                letter-spacing: 0.2px;
                text-align: center;
                color: #fff;
                max-width: 73%;
                margin: 0 auto;
                margin-top: 4rem;
                display: block;
                position: relative;
                order: 5;
                @include mq($from: desktop) {
                    font-size: 26px;
                    max-width: 700px;
                    margin: 7rem auto 4rem;
                }
                &::after {
                    content: "";
                    width: 40%;
                    height: 5px;
                    border: solid 1px #fff;
                    display: block;
                    margin: 0 auto;
                    margin-top: 3rem;
                    border-radius: 5px;
                    opacity: 1;
                    @include mq($from: desktop) {
                        width: 250px;
                        height: 12px;
                        margin-top: 6rem;
                    }
                }
            }
        }
        // .product__set
        &__set {
            position: relative;
            display: flex;
            margin: 2rem;
            // margin-top: 2rem;
            border-radius: 9px;
            box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.07);
            background-color: #fff;
            overflow: hidden;
            order: 7;
            @include mq($from: desktop) {
                width: 700px;
                margin: 2rem auto;
            }
            // .product__set-img
            &-img {
                flex-basis: 40%;
                min-height: 180px;
                @include mq($from: desktop) {
                    flex-basis: 45%;
                }
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 1;
                }
            }
            // .product__set-meta
            &-meta {
                padding: 1rem;
                flex-basis: 60%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin-bottom: 4rem;
                @include mq($from: desktop) {
                    flex-basis: 55%;
                    padding: 2rem;
                    margin-bottom: 5rem;
                }
            }
            // .product__set-title
            &-title {
                font-family: $blaak;
                font-size: 20.8px;
                font-weight: 900;
                line-height: 1;
                text-align: left;
                color: #000;
                position: relative;
                margin-bottom: 0.5rem;
                display: block;
                text-transform: lowercase;
                width: 80%;
                @include mq($from: desktop) {
                    font-size: 42px;
                }
                &::after {
                    content: "";
                    width: 40%;
                    border: 1px solid #000;
                    height: 5px;
                    display: block;
                    border-radius: 5px;
                    margin-top: 0.4rem;
                    @include mq($from: desktop) {
                        height: 6px;
                        margin-top: 1.25rem;
                    }
                }
                a {
                    color: #000;
                    text-decoration: none;
                }
            }
            // .product__set-text
            &-text {
                font-family: $lekton;
                font-size: 13px;
                font-weight: bold;
                line-height: 1.14;
                letter-spacing: 0.2px;
                text-align: left;
                color: #000;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                @include mq($from: desktop) {
                    font-size: 20px;
                }
            }
            // .product__set-icon
            &-icon {
                position: absolute;
                top: 5%;
                right: 4%;
                @include mq($from: desktop) {
                    top: 8%;
                }
                svg {
                    @include mq($from: desktop) {
                        transform: scale(1.75);
                    }
                }
            }
            // .product__set-buy
            &-buy {
                position: absolute;
                bottom: 10px;
                width: auto;
                left: 0;
                right: 0;
                margin: auto 10px;
                @include mq($from: desktop) {
                    bottom: 1rem;
                    margin: auto 1rem;
                }
                .product-size-modal-button {
                    font-family: $lekton;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    color: #fff;
                    border-radius: 9px;
                    transition: 0.1s ease-out;
                    &:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    @include mq($from: desktop) {
                        font-size: 26px;
                    }
                    &:active,
                    &:focus-visible {
                        background-color: #0d0c0c;
                    }
                }
                .cart-product-size-modal,
                .shop-add-to-cart-modal {
                    -webkit-backdrop-filter: blur(7px);
                    backdrop-filter: blur(7px);
                    background-color: rgba(217, 217, 217, 0.02);
                    .modal-dialog {
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        left: 0;
                        margin: 0;
                        top: unset;
                        min-height: unset;
                        @include mq($from: desktop) {
                            position: unset;
                            margin: auto;
                            min-height: -webkit-fill-available;
                        }
                        .modal-content {
                            background-color: #000;
                            padding: 2rem;
                            .modal-body {
                                padding: 0;
                                .modal-title {
                                    font-family: $blaak-black-regular;
                                    font-size: 21px;
                                    font-weight: 900;
                                    line-height: 1.2;
                                    text-align: center;
                                    color: #fff;
                                    text-transform: lowercase;
                                    margin-bottom: 1rem;
                                    @include mq($from: desktop) {
                                        font-size: 30px;
                                    }
                                    span {
                                        color: #bbcea8;
                                    }
                                }
                            }
                        }
                    }
                    .woovr-variations {
                        margin: auto;
                        display: flex;
                        justify-content: space-between;
                        width: 75%;
                        @include mq($from: desktop) {
                            width: 65%;
                        }
                        .woovr-variation {
                            &[data-id="0"],
                            &-selector,
                            &-image,
                            &-price {
                                display: none;
                            }
                            &-name {
                                text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                font-family: $lekton;
                                font-size: 35px;
                                font-weight: bold;
                                line-height: 1.37;
                                letter-spacing: 0.27px;
                                text-align: left;
                                color: #fff;
                                border-radius: 6px;
                                border: solid 4px #fff;
                                width: 70px;
                                height: 70px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding-top: 3px;
                                transition: all 0.1s ease;
                                @include mq($from: desktop) {
                                    font-size: 37px;
                                    width: 80px;
                                    height: 80px;
                                }
                            }
                            &__extra {
                                display: none;
                            }
                            &:hover {
                                background-color: unset;
                                .woovr-variation-name {
                                    background-color: #fff;
                                    color: #000;
                                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                }
                            }
                            &-active {
                                .woovr-variation-name {
                                    background-color: #fff;
                                    color: #000;
                                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                                }
                            }
                        }
                    }
                    .single_variation_wrap {
                        .added_to_cart.wc-forward {
                            display: none;
                        }
                    }
                    .quantity {
                        display: none !important;
                    }
                    .single_add_to_cart_button:not(.wpcbn-btn-single) {
                        display: none;
                    }
                    [name="buy-now"].single_add_to_cart_button {
                        font-family: $blaak-black-regular;
                        font-size: 14px;
                        font-weight: 900;
                        line-height: 3.5;
                        text-align: center;
                        color: #000;
                        padding: 0;
                        border: 1px solid #fff;
                        text-transform: lowercase;
                        transition: 0.1s ease-out;
                        &:hover {
                            color: #fff;
                            border: 1px solid #fff;
                            background-color: #0000;
                        }
                        @include mq($from: desktop) {
                            font-size: 24px;
                            line-height: 2.5;
                        }
                    }
                    .accordion {
                        display: none;
                    }
                }
            }
            // .product__set-header
            &-header {
                text-align: center;
                padding: 0 5rem;
                margin-top: 4rem;
                order: 6;
                @include mq($from: desktop) {
                    max-width: 650px;
                    margin: 4rem auto 2rem;
                }
                h5 {
                    font-family: $blaak;
                    font-size: 20px;
                    font-weight: 900;
                    line-height: 0.77;
                    text-align: center;
                    color: #fff;
                    @include mq($from: desktop) {
                        font-size: 35.4px;
                        margin-bottom: 2rem;
                    }
                }
                p {
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                    font-size: 13px;
                    font-weight: bold;
                    line-height: 1;
                    letter-spacing: 0.2px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    @include mq($from: desktop) {
                        font-size: 22px;
                    }
                }
            }
        }
    }
    .footer-section__image {
        margin: 4rem auto 3rem;
        @include mq($from: desktop) {
            margin: 8rem auto 3rem;
        }
    }
}
#popover-form {
    display: none;
    // .hide {
    // }
}
#shiprocket_pincode_check,
#check_pincode,
#pincode_response {
    display: none;
}
.product_cat-summer-collection.product {
    .summary {
        @include mq($until: tablet) {
            background-color: #de5386;
        }
    }
    .product__set-title a {
        color: #de5386;
    }
    .product-size-modal-button {
        span {
            color: #de5386;
        }
    }
}
.summer-collection .classic-section__category {
    @include mq($from: tablet) {
        margin: 1rem auto;
    }
}
.product-activewear {
    order: 8;
    padding: 4rem 1.5rem 0;
    .product-activewear__text {
        margin-bottom: 2rem;
        @include mq($from: tablet) {
            margin-bottom: 4rem;
        }
        .product-activewear__title {
            font-size: 20px;
            font-weight: 900;
            line-height: 0.77;
            text-align: center;
            color: #fff;
            margin-bottom: 0.5rem;
            font-family: $blaak;
            @include mq($from: tablet) {
                font-size: 35px;
            }
        }
        .product-activewear__subtitle {
            font-family: Poppins;
            font-size: 11px;
            font-weight: 300;
            line-height: 1.35;
            letter-spacing: 1.6px;
            text-align: center;
            color: #ffffffa6;
            @include mq($from: tablet) {
                font-size: 23px;
            }
        }
    }
}
@include mq($until: tablet) {
    body.single-product
        .product
        .woocommerce-product-gallery
        .flex-control-nav.flex-control-thumbs {
        left: 40px;
        right: unset;
        flex-direction: row;
        gap: 1rem;
    }
}
body.summer-collection-product
    .product
    .summary
    .cart
    .woovr-variations
    .woovr-variation__extra-title {
    color: #fff;
}
body.single-product.summer-collection-product
    .product
    .summary
    .cart
    .woovr-variations
    .woovr-variation__extra,
.summary.entry-summary
    .woocommerce-variation-add-to-cart
    .product-detail-buy-now-btn.wpcbn-btn.wpcbn-btn-single.single_add_to_cart_button.button.alt.btn.btn-light {
    display: none;
}
```

## File: assets/sass/components/header.scss
```scss
.navbar {
    background-color: transparent;
    padding: 0 2rem;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 999;
    top: 0;
    @include mq($from: desktop) {
        height: 100px;
    }
    .navbar-brand__logo {
        svg {
            @include mq($from: desktop) {
                transform: scale(1.5);
                margin-left: 1rem;
            }
        }
    }
    .navbar-admin,
    .navbar-cart {
        @include mq($from: desktop) {
            transform: scale(1.25);
            margin-right: 2rem;
        }
    }
    &.active {
        .home-arrow,
        .woocommerce-page-title {
            display: none;
        }
        .kirgo-mobile-logo {
            display: block;
        }
        .navbar-brand__logo {
            z-index: 99999;
            svg {
                @include mq($from: desktop) {
                    transform: scale(1.25);
                    margin-left: 10px;
                }
                g {
                    fill: #fff;
                    filter: none;
                    @include mq($from: desktop) {
                        fill: #fff;
                    }
                }
            }
        }
        .navbar-admin {
            svg {
                path {
                    stroke: #fff;
                    fill: #fff;
                }
            }
        }
        .navbar-cart {
            svg {
                path {
                    fill: #fff;
                }
            }
            .cart-count {
                color: #fff;
            }
            .xoo-wsc-sc-cont {
                .xoo-wsc-sc-bkcont {
                    .xoo-wsc-sc-bki {
                        &::before {
                            display: none;
                        }
                        &::after {
                            display: inherit;
                        }
                    }
                    .xoo-wsc-sc-count {
                        color: #fff;
                    }
                }
            }
        }
        .navbar-hamburger {
            span {
                background: transparent;
                &:before {
                    top: 0;
                    transform: rotate(45deg);
                    background: $tmm_activ_color;
                }
                &:after {
                    bottom: 0;
                    transform: rotate(-45deg);
                    width: 100%;
                    background: $tmm_activ_color;
                }
            }
        }
        .navbar-links {
            right: 0;
        }
    }
    .home-arrow {
        svg {
            width: 10px;
            height: 15px;
        }
    }
    .woocommerce-page-title {
        font-style: inherit;
        font-weight: 900;
        font-size: 26.3464px;
        line-height: 1;
        margin: 0 0 0 0.5rem;
        text-transform: lowercase;
    }
}
.navbar-carousel {
    width: 100%;
    padding: 0 1rem;
    margin-top: 4rem;
    &-cell {
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        // Summer 25 banner
        &.banner {
            height: 200px;
            background: #ffb6c1;
            position: relative;
            .banner-text {
                position: absolute;
                top: 2rem;
                left: 2rem;
                font-size: 2.5rem;
                font-weight: bold;
                color: white;
            }
        }
        // Classic collection
        &.collection {
            height: 180px;
            background: #f5f5f5;
            .collection-text {
                padding: 2rem;
                h2 {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
            }
        }
        // About and Track sections
        &.info-card {
            height: 100px;
            background: white;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            .prefix {
                font-size: 1.2rem;
                color: #666;
                margin-bottom: 0.25rem;
            }
            .title {
                font-size: 1.8rem;
                font-weight: bold;
            }
        }
        // Product cards
        &.product-card {
            height: 250px;
            background: white;
            .product-image {
                height: 200px;
                width: 100%;
                object-fit: cover;
            }
            .product-info {
                padding: 1rem;
                .product-name {
                    font-size: 1.2rem;
                    color: #ff69b4;
                    font-weight: 600;
                }
            }
        }
    }
}
// Social links at bottom
.social-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    .social-icon {
        width: 24px;
        height: 24px;
        color: white;
    }
    .get-in-touch {
        padding: 0.75rem 1.5rem;
        background: #ff69b4;
        color: white;
        border-radius: 2rem;
        text-decoration: none;
        font-weight: 500;
    }
}
@media (min-width: 768px) {
    .carousel {
        // margin-top: 5rem;
        // padding: 0 2rem;
        &-cell {
            &.banner {
                height: 300px;
            }
            &.collection {
                height: 250px;
            }
            &.product-card {
                width: calc(33.333% - 1rem);
                margin-right: 1rem;
            }
        }
    }
}
.woocommerce-cart {
    .navbar {
        .navbar-cart.disabled {
            opacity: 0.3;
        }
        .navbar-cart {
            pointer-events: none;
        }
    }
}
body.page-id-425,
body.page-id-10,
body.page-id-432,
body.page-id-436,
body.page-template-template-get-in-touch {
    .navbar {
        svg {
            fill: #000;
            path {
                fill: #000;
            }
            g {
                fill: #000;
            }
        }
        .navbar-hamburger {
            span {
                background: #000;
                &:before,
                &:after {
                    background: #000;
                }
            }
        }
        .xoo-wsc-sc-cont {
            .xoo-wsc-sc-bkcont {
                .xoo-wsc-sc-bki {
                    &::before {
                        display: none;
                    }
                    &::after {
                        display: inherit;
                    }
                }
                .xoo-wsc-sc-count {
                    color: #000;
                }
            }
        }
    }
    .navbar.active {
        .navbar-hamburger {
            span {
                background: #0000;
            }
        }
    }
    .navbar.scrolled-screen {
        svg {
            fill: #fff;
            path {
                fill: #fff;
            }
            g {
                fill: #fff;
            }
        }
        .navbar-hamburger {
            span {
                background: #fff;
                &:before,
                &:after {
                    background: #fff;
                }
            }
        }
        .xoo-wsc-sc-cont {
            .xoo-wsc-sc-bkcont {
                .xoo-wsc-sc-bki {
                    &::before {
                        display: inherit;
                    }
                    &::after {
                        display: none;
                    }
                }
                .xoo-wsc-sc-count {
                    color: #fff;
                }
            }
        }
    }
}
.scrolled-screen {
    background-color: #0d0c0c;
}
.isFixed {
    overflow-y: hidden;
}
.navbar-admin {
    margin: 3px 0 0 auto;
    z-index: 99999;
    display: flex;
    svg {
        width: 20px;
        height: 20px;
        filter: drop-shadow(0px 2px 2px rgb(0 0 0 / 0.4));
        path {
            fill: #fff;
        }
    }
}
.navbar-admin-desktop {
    display: none;
    @include mq($from: desktop) {
        display: flex;
        .xoo-el-action-sc {
            font-size: 0;
            color: #0000;
        }
    }
}
.navbar-admin-mobile {
    display: flex;
    @include mq($from: desktop) {
        display: none;
    }
}
.navbar-cart {
    margin: 0 10px 0 20px;
    text-decoration: none;
    position: relative;
    z-index: 99999;
    svg {
        width: 20px;
        height: 22px;
    }
    .cart-count {
        font-family: $lekton;
        color: #fff;
        font-size: 10px;
        // background-color: #fff;
        border-radius: 50%;
        line-height: 1;
        font-weight: 700;
        position: absolute;
        top: 4.7px;
        left: 1px;
        display: flex;
        width: 18px;
        height: 20px;
        justify-content: center;
        align-items: center;
    }
    svg {
        path {
            fill: #fff;
        }
    }
    // Ajax Cart Plugin CSS
    .xoo-wsc-sc-cont {
        color: #fff;
        font-family: $lekton;
        .xoo-wsc-sc-bkcont {
            // transform: scale(1.15);
            margin-right: 0px;
            // margin-top: 2px;
            .xoo-wsc-sc-bki {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: -1px;
                filter: drop-shadow(0px 2px 2px rgb(0 0 0 / 0.4));
                &::before {
                    content: url("/wp-content/themes/kirgo-theme/assets/images/header/cart-light.svg");
                }
                &::after {
                    display: none;
                    content: url("/wp-content/themes/kirgo-theme/assets/images/header/cart-dark.svg");
                }
            }
            .xoo-wsc-sc-count {
                background-color: unset;
                font-size: 12px;
                // right: 0px;
                // top: 10px;
                height: 9px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: 700;
                filter: drop-shadow(0px 2px 2px rgb(0 0 0 / 0.4));
            }
        }
    }
}
.navbar-hamburger {
    width: $tmm_real_width;
    height: $tmm_real_height;
    overflow: hidden;
    display: inline-block;
    position: relative;
    z-index: 99999;
    transform: scale(0.65);
    cursor: pointer;
    filter: drop-shadow(0px 2px 2px rgb(0 0 0 / 0.4));
    @include mq($from: desktop) {
        transform: scale(0.9);
        margin-left: 1rem;
    }
    span {
        position: absolute;
        width: 100%;
        display: block;
        transition: all 0.2s;
        background: $tmm_color;
        height: $tmm_stroke_width;
        top: $tmm_mid_top;
        left: $tmm_h_padding;
        width: $tmm_width;
        border-radius: $tmm_border_radius;
        &:before,
        &:after {
            border-radius: $tmm_border_radius;
            position: absolute;
            background: $tmm_color;
            height: $tmm_stroke_width;
            content: "";
            display: block;
            top: -$tmm_stroke_width - $tmm_stroke_space;
            transition: all 0.2s;
            width: 100%;
        }
        &:after {
            bottom: -10px;
            top: auto;
            width: 70%;
            right: 0;
        }
    }
}
.navbar-links {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 100%;
    background-color: #0d0c0c;
    transition: all 0.4s ease;
    padding-top: 100px;
    overflow-y: auto;
    @include mq($until: mobile) {
        padding-top: 75px;
    }
    @include mq($from: desktop) {
        display: flex;
        flex-direction: column;
        padding-top: 0;
        flex-direction: row;
    }
    .product-nav-links-left {
        flex-basis: 65%;
        display: none;
        @include mq($from: desktop) {
            display: flex;
        }
        .product-nav-link {
            background-repeat: no-repeat;
            flex-basis: 50%;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            .product-prefix {
                font-family: $blaak-black-regular;
                font-style: italic;
                font-weight: 400;
                font-size: 38.403px;
                line-height: 93.9%;
                color: #ffffff;
            }
            .product-title {
                font-family: $blaak-black-regular;
                font-style: normal;
                font-weight: 700;
                font-size: 53.1734px;
                line-height: 103.9%;
                color: #ffffff;
            }
            .menu-buy-link {
                margin-bottom: 3rem;
                font-family: $lekton;
                background: #ffffff;
                box-shadow: 0px 7.20548px 12.9699px rgb(0 0 0 / 25%);
                border-radius: 6.82624px;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 18px;
                text-align: center;
                color: #000000;
                padding: 1rem 4rem;
                text-decoration: none;
                &:hover {
                    background-color: #000;
                    color: #fff;
                }
            }
        }
    }
    .product-nav-links-right {
        flex-basis: 35%;
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        @include mq($from: desktop) {
            height: unset;
            justify-content: center;
            padding: 0 2rem;
        }
        .navbar-menu {
            padding: 0 2rem;
            @include mq($from: desktop) {
                padding: 0 3rem;
                margin: auto 0 0;
                gap: 1rem;
                display: flex;
                flex-direction: column;
            }
            .navbar-menu__item {
                .navbar-menu__link {
                    @include mq($from: desktop) {
                        margin: 0;
                    }
                }
            }
        }
    }
}
.active.white-background {
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100px;
        right: 0;
        top: 0;
        background-color: #000;
        z-index: 99999;
    }
}
// .navbar-wrapper {
// }
.navbar-menu {
    // .navbar-menu__item
    list-style-type: none;
    padding: 0 2rem 0 2rem;
    .hidden-link-desktop {
        @include mq($from: desktop) {
            display: none;
        }
    }
    &__item {
        text-decoration: none;
        &:nth-child(2) {
            margin-bottom: 1.75rem;
        }
        &:hover {
            .navbar-menu__link {
                &::after {
                    content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow-white.svg");
                }
            }
        }
    }
    // .navbar-menu__link
    &__link {
        border: 1px solid #000;
        background-color: #fff;
        border-radius: 9px;
        padding: 1.3rem 0.8rem 0.8rem;
        margin-bottom: 1rem;
        font-family: $blaak-black-regular;
        font-size: 23px;
        font-weight: 900;
        line-height: 21.6px;
        text-align: left;
        color: #000;
        position: relative;
        &::after {
            content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow.svg");
            position: absolute;
            z-index: 9999;
            right: 8px;
            bottom: 3px;
        }
        span {
            display: block;
            font-family: $blaak-black-light;
            font-size: 13px;
            font-weight: 300;
            font-style: italic;
            line-height: 12.2px;
            text-align: left;
            color: #0d0c0c;
            margin-bottom: 5px;
        }
        .classic {
            color: #fff;
        }
    }
    .product-category {
        // padding: 5rem 1.5rem 0.8rem 0.8rem;
        background-size: cover;
        color: #fff;
        border: none;
        position: relative;
        z-index: 1;
        background-position: center;
        @include mq($until: tablet) {
            min-height: 130px;
            padding-right: 9rem;
        }
        &::after {
            display: none;
        }
    }
    .top-category {
        background-image: url("/wp-content/themes/kirgo-theme/assets/images/home-page/latest/nav-summer.webp");
    }
    .leggings-category {
        background-image: url("/wp-content/themes/kirgo-theme/assets/images/header/nav-classic.png");
        margin-right: 0;
    }
}
.social-link {
    // .social-link__items
    padding: 0 2rem;
    margin: auto 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__items {
        text-decoration: none;
        img {
            filter: invert(1);
        }
        &:first-child {
            img {
                width: 20px;
            }
        }
    }
    .social-links {
        min-width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .get-in-touch {
        font-family: $blaak-black-regular;
        font-size: 12.1px;
        font-weight: 900;
        line-height: 11.4px;
        text-align: left;
        padding: 1.5rem;
        background-color: #de5386;
        border-radius: 9px;
        color: #fff;
        border: 1px solid #000;
        &:hover {
            background-color: #fff;
            color: #000;
            border: 1px solid #000;
        }
    }
    // .social-link__image
    // &__image {
    // 	width: 20px;
    // }
}
.empty-cart {
    .xoo-wsc-sc-count {
        color: #0000;
    }
}
.kirgo-mobile-logo {
    @include mq($until: desktop) {
        display: none;
    }
}
.home-arrow,
.woocommerce-page-title {
    @include mq($from: desktop) {
        display: none;
    }
}
body.summer-collection-product {
    .navbar-brand__logo {
        svg {
            path {
                fill: #de5386;
            }
        }
    }
}
body.summer-collection-product.postid-1365 {
    .navbar-brand__logo {
        svg {
            path {
                fill: #fff;
            }
        }
    }
}
.nav-product-carousel {
    margin-bottom: 1rem;
    @include mq($from: desktop) {
        margin-bottom: 0rem;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    .product-grid__item {
        margin-right: 0.5rem;
        text-decoration: none;
        background-color: #fff;
        border-radius: 10px;
        padding: 0.4rem;
        width: 110px;
        padding-bottom: 0.5rem;
        @include mq($from: desktop) {
            width: 200px;
            margin-right: 1rem;
        }
        &.summer-collection {
            .product-title {
                color: #de5386;
            }
        }
        img {
            width: 100%;
            height: 125px;
            border-radius: 8px;
            object-fit: cover;
            aspect-ratio: 3/4;
            @include mq($from: desktop) {
                height: 250px;
                aspect-ratio: 3/5;
            }
        }
        .product-title {
            font-family: "BlaakRegular_personal";
            text-transform: lowercase;
            font-size: 12px;
            font-weight: 900;
            line-height: 12.2px;
            max-width: 90%;
            text-align: left;
            color: #000;
            margin: 0.4rem 0rem 0 0.2rem;
            @include mq($from: desktop) {
                font-size: 16px;
                line-height: 20.5px;
                max-width: 100%;
                margin: 0.4rem 0rem 0 0.5rem;
            }
            .category {
                display: block;
                font-size: 0.875rem;
                color: #666;
                text-transform: uppercase;
                margin-bottom: 0.5rem;
            }
        }
    }
}
```

## File: assets/sass/pages/home.scss
```scss
// Home Slider
@include mq($until: tablet) {
    body.home {
        position: relative;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 70rem;
            top: 0;
            left: 0;
            background-image: linear-gradient(
                to bottom,
                #de5386 33%,
                #0d0c0c 100%
            );
            z-index: -1;
        }
    }
}
.summer-collection {
    .classic-section__category {
        @include mq($until: tablet) {
            margin-bottom: 3rem;
        }
        .classic-section__link {
            background-color: #fff;
            .homepage-product-name {
                color: #de5386;
            }
        }
    }
}
.classic-section {
    .classic-section__categoryRegular {
        .classic-section__link {
            background-color: #fff;
            h2.homepage-product-name {
                color: #000;
            }
        }
    }
}
.hero-section {
    padding: 1rem;
    background-color: #fff;
    border-radius: 9px;
    margin-bottom: 1rem;
    @include mq($from: tablet) {
        display: none;
    }
    .hero-imageContainer {
        @include mq($until: tablet) {
            overflow: hidden;
            border-radius: 5px;
            height: 180px;
            display: flex;
            align-items: center;
        }
        .hero-image {
            width: 100%;
            border-radius: 5px;
            @include mq($until: tablet) {
                transform: scale(1.75) translate(12px, -24px);
            }
        }
    }
}
.hero-classicSection {
    .hero-imageContainer {
        .hero-image {
            @include mq($until: tablet) {
                transform: scale(1.6) translate(0px, 0px);
            }
        }
    }
}
.slider-section {
    padding-top: 80px;
    @include mq($until: tablet) {
        display: none;
    }
    @include mq($from: tablet-md) {
        padding-top: 100px;
    }
    @include mq($from: desktop) {
        padding-top: 150px;
    }
    @include mq($from: desktop-md) {
        padding-top: 200px;
    }
    @include mq($from: desktop) {
        position: relative;
    }
    .collection-introduction {
        display: none;
        @include mq($from: desktop) {
            display: block;
            width: 400px;
            margin-left: 20%;
            margin-bottom: -14rem;
            position: relative;
            z-index: 11;
        }
        .title {
            font-family: $blaak-black-regular;
            font-style: normal;
            font-weight: 400;
            font-size: 35.4321px;
            line-height: 111.4%;
            letter-spacing: 0.005em;
            color: #ffffff;
        }
        .subTitle {
            font-family: $blaak-black-regular;
            font-style: italic;
            font-weight: 400;
            font-size: 18.9429px;
            line-height: 93.9%;
            color: #ffffff;
            width: 360px;
            margin: 2rem 0 3.5rem;
        }
        .buy-button {
            font-family: $lekton;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: #000;
            background-color: #fff;
            padding: 0.75rem;
            text-decoration: none;
            border-radius: 8px;
            margin: 0;
            line-height: 1;
            width: 280px;
            display: flex;
            justify-content: center;
            border: 1px solid #fff;
            transition: 0.05s ease-out;
            &:hover {
                color: #fff;
                border: 1px solid #fff;
                background-color: #0000;
            }
        }
    }
    .home-carousel {
        @include mq($from: desktop) {
            padding: 0 0 3rem 0;
        }
        .carousel-cell {
            border-radius: 10px;
            margin-right: 0px;
            overflow: hidden;
            width: 82%;
            height: 200px;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-align-items: center;
            align-items: center;
            @include mq($from: tablet, $until: desktop) {
                height: 300px;
            }
            @include mq($from: desktop) {
                width: 30%;
                height: 500px;
                margin-right: 30px;
                align-items: flex-end;
                left: 400px !important;
            }
            @include mq($from: desktop-lg) {
                height: 600px;
            }
            &__data {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                object-fit: cover;
                width: 100%;
            }
            &__text {
                position: absolute;
                max-width: 200px;
                text-shadow: 0 4px 6px rgb(0 0 0 / 25%);
                font-size: 26px;
                font-weight: 900;
                line-height: 25.3px;
                text-align: center;
                color: #fff;
                z-index: 2;
                @include mq($from: desktop) {
                    max-width: 290px;
                    font-size: 38px;
                    line-height: 40px;
                }
            }
            &.is-selected {
                // width: 80%;
                @include mq($from: desktop) {
                    height: 500px;
                }
                @include mq($from: desktop-lg) {
                    height: 600px;
                }
                .slider-image {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    transition: 0.2s ease-in-out;
                    @include mq($from: desktop) {
                        height: 500px;
                    }
                    @include mq($from: desktop-lg) {
                        height: 600px;
                    }
                }
            }
            .slider-image {
                display: block;
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
                -webkit-transform: scale(0.9, 0.65);
                transform: scale(0.9, 0.65);
                transition: 0.2s ease-in-out;
                object-fit: cover;
                width: 100%;
                @include mq($until: mobile-md) {
                    height: 190px;
                }
                @include mq($from: desktop) {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
                @include mq($from: desktop-md) {
                    height: 250px;
                    transform: scale(1);
                }
            }
        }
        .flickity-button {
            display: none;
            @include mq($from: desktop) {
                bottom: -40px;
                background: rgba(0, 0, 0, 0);
                color: rgba(0, 0, 0, 0);
                display: flex;
                justify-content: center;
                align-items: center;
                top: unset;
                transition: all 0.1s ease-out;
            }
            &:hover {
                opacity: 0.5;
            }
            .flickity-button-icon {
                display: none;
            }
        }
        .flickity-prev-next-button.previous {
            @include mq($from: desktop) {
                right: 12%;
                left: unset;
                &::after {
                    position: absolute;
                    content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/prev-arrow.svg");
                }
            }
            @include mq($from: desktop-lg) {
                right: 13%;
            }
        }
        .flickity-prev-next-button.next {
            @include mq($from: desktop) {
                right: 9%;
                &::after {
                    position: absolute;
                    content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/next-arrow.svg");
                }
            }
            @include mq($from: desktop-lg) {
                right: 11%;
            }
        }
        .flickity-page-dots {
            display: none;
            @include mq($from: desktop) {
                width: unset;
                display: flex;
                text-align: end;
                justify-content: end;
                align-items: center;
                bottom: 2px;
                left: 960px;
            }
            @include mq($from: desktop-lg) {
                left: 78%;
            }
            .dot {
                width: 5px;
                height: 5px;
                opacity: 1;
                margin: 0 5px;
                background-color: #252323;
            }
            .dot.is-selected {
                width: 10px;
                height: 10px;
                background-color: #fff;
            }
        }
    }
}
// Classic Section
.classic-section {
    padding: 1rem 2rem 0;
    position: relative;
    // display: none;
    @include mq($until: tablet) {
        display: block;
        padding: 5rem 1.5rem 0;
    }
    // .classic-section__wrapper
    // &__wrapper {
    // }
    // .classic-section__link
    &__category {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        @include mq($until: desktop) {
            gap: 10px;
        }
        @include mq($from: desktop) {
            justify-content: center;
            width: 70%;
            margin: 1rem auto;
        }
        @include mq($until: tablet) {
            // background: #fff;
        }
        .motto-image {
            display: none;
            @include mq($from: desktop) {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 5rem;
            }
        }
    }
    &__link {
        display: block;
        flex-basis: 48%;
        text-decoration: none;
        border: 1px solid #000;
        border-radius: 10px;
        padding: 20rem 0.8rem 1.25rem 1rem;
        background-size: cover;
        color: #fff;
        text-align: left;
        position: relative;
        z-index: 2;
        background-repeat: no-repeat;
        &::before {
            @include mq($from: desktop) {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                background: linear-gradient(
                    179.75deg,
                    rgba(0, 0, 0, 0) 0.22%,
                    #000000 108.94%
                );
            }
        }
        @include mq($until: desktop) {
            border: none;
            border-radius: 9px;
            padding: 10px 10px 15px;
            background: #171616;
            box-shadow: 0px 1px 32px 0px rgba(0, 0, 0, 0.07);
        }
        .desktop-elements {
            display: none;
            @include mq($from: desktop) {
                display: block;
            }
        }
        .mobile-elements {
            display: block;
            position: relative;
            svg {
                position: absolute;
                right: 0;
                width: 20px;
                z-index: 1;
            }
            .homepage-product-image {
                margin-bottom: 1rem;
                @include mq($until: tablet) {
                    height: 240px;
                }
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 9px;
                    @include mq($until: tablet) {
                        height: 100% !important;
                        object-position: center !important;
                        transform: unset !important;
                    }
                }
                &.leggings img {
                    transform: scale(1.4) !important;
                }
            }
            .homepage-product-name {
                color: #fff;
                font-size: 16px;
                font-family: $blaak-black-regular;
                font-style: normal;
                font-weight: 900;
                line-height: 93.9%;
                max-width: 100px;
                text-transform: lowercase;
            }
            .homepage-product-description {
                color: rgba(255, 255, 255, 0.65);
                text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
                font-size: 11px;
                font-family: $lekton;
                font-style: normal;
                font-weight: 700;
                line-height: 118%;
                letter-spacing: 0.165px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom: 1rem;
            }
            @include mq($from: desktop) {
                display: none;
            }
        }
        & > * {
            @include mq($from: desktop) {
                position: relative;
                z-index: 2;
            }
        }
        @include mq($from: desktop) {
            border-radius: 18px;
            max-width: 350px;
            padding: 9rem 1.5rem 2rem 1.5rem;
            overflow: hidden;
            // background-size: 160% 110%;
            // background-position: center 0;
        }
        p {
            font-size: 18px;
            font-weight: 900;
            line-height: 21.6px;
            text-align: left;
            margin-bottom: 0;
            @include mq($from: desktop) {
                margin-bottom: 1rem;
                font-size: 45.5px;
                line-height: 50.6px;
            }
        }
        .product-link {
            // display: none;
            font-family: $lekton;
            font-size: 21.2px;
            font-weight: bold;
            text-align: center;
            color: #000;
            background-color: #fff;
            padding: 0.7rem;
            text-decoration: none;
            border-radius: 8px;
            margin: 0;
            line-height: 1.5;
            border: 1px solid #fff;
            transition: 0.1s ease-out;
            display: block;
            &:hover {
                color: #fff;
                border: 1px solid #fff;
                background-color: #000;
            }
            @include mq($until: desktop) {
                font-size: 10px;
                padding: 0.5rem;
                line-height: 1;
                border-radius: 3px;
            }
        }
    }
    &__linkContainer {
        position: relative;
        width: 100%;
        @include mq($from: tablet) {
            width: 31%;
        }
        .add-to-cart-button {
            position: absolute;
            bottom: 5.5rem;
            right: 1.75rem;
            z-index: 11;
            text-decoration: none;
            font-size: 2rem;
            color: #000;
            background-color: #fff;
            line-height: 1;
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            font-weight: 300;
            @include mq($from: tablet) {
                display: none;
            }
        }
    }
    span {
        display: block;
        font-size: 13px;
        font-weight: 300;
        line-height: 13.1px;
        font-style: italic;
        font-family: $blaak-black-light;
        @include mq($from: desktop) {
            // display: none;
            font-size: 20px;
        }
    }
    &__text {
        color: #fff;
        @include mq($from: desktop) {
            display: none;
        }
    }
    // .classic-section__tagline
    &__tagline {
        transform: rotate(-90deg);
        font-family: Lekton;
        font-size: 13px;
        font-style: italic;
        line-height: 12.2px;
        text-align: left;
        color: #fff;
        position: absolute;
        left: -45%;
        top: 45%;
        width: 100%;
        display: none;
        @include mq($from: desktop) {
            display: none;
        }
    }
    .primary-link {
        border: 1px solid #000;
        border-radius: 9px;
        padding: 1.3rem 0.8rem 0.8rem 1rem;
        margin-bottom: 1rem;
        font-size: 23px;
        font-weight: 900;
        line-height: 21.6px;
        text-align: left;
        color: #000;
        background-color: #fff;
        display: block;
        position: relative;
        transition: all 0.1s ease-out;
        cursor: pointer;
        @include mq($from: desktop) {
            display: none;
            background-color: #0000;
            color: #fff;
            border: none;
            text-align: center;
            font-size: 35.4px;
        }
        @include mq($until: tablet) {
            margin: 1rem 0.5rem 0;
            background-color: #0d0c0c;
            color: #fff;
        }
        &:hover {
            border: 1px solid #fff;
            color: #fff;
            // background-color: #0000;
            &::after {
                content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow-white.svg");
            }
        }
        &::after {
            content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow-white.svg");
            position: absolute;
            z-index: 1;
            right: 8px;
            bottom: 3px;
        }
        &__text {
            // color: #000;
            margin-bottom: 5px;
            @include mq($from: desktop) {
                display: none;
            }
        }
    }
    .hero-sectionSummer {
        .primary-link {
            @include mq($until: tablet) {
                margin: 1rem 0.5rem 0;
                background-color: #de5386;
                color: #fff;
                border: none;
            }
            &::after {
                content: url("/wp-content/themes/kirgo-theme/assets/images/link-arrow-white.svg");
            }
        }
    }
    .secondary-link {
        text-decoration: none;
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 1rem;
        display: flex;
        justify-content: center;
        // -webkit-text-stroke: 0.2px #000;
        font-family: Poppins;
        font-size: 16px;
        font-weight: bold;
        line-height: 0.8;
        letter-spacing: -0.16px;
        text-align: center;
        color: #000;
        transition: 0.1sease-out;
        max-width: 90%;
        margin: 0 auto;
        background-color: #fff;
        &:hover {
            background-color: #fff;
            color: #000;
        }
        @include mq($from: desktop) {
            display: none;
        }
    }
}
// Newsletter Section
.newsletter-section {
    padding: 1rem 2rem 2rem;
    @include mq($until: tablet) {
        padding: 1rem 1.5rem 0;
    }
    @include mq($from: desktop) {
        padding: 0 0.5rem;
        max-width: 1000px;
        margin: 7rem auto 8rem;
    }
    @include mq($from: desktop-xl) {
        max-width: 1200px;
    }
    // .newsletter-section__wrapper
    &__wrapper {
        border-radius: 9px;
        background-color: #000;
        overflow: hidden;
        @include mq($until: tablet) {
            padding: 1rem;
            background-color: #fff !important;
        }
        @include mq($from: desktop) {
            display: flex;
        }
    }
    // .newsletter-section__image
    &__image {
        width: 100%;
        height: 270px;
        object-fit: cover;
        @include mq($until: tablet) {
            height: 400px;
        }
        @include mq($from: desktop) {
            flex-basis: 44%;
            height: 350px;
            object-position: 0 20%;
        }
    }
    // .newsletter-section__content
    &__content {
        padding: 2rem 1rem 1rem;
        @include mq($from: desktop) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 450px;
            margin: 0 auto 0 4rem;
            padding: 0;
        }
    }
    // .newsletter-section__title
    &__title {
        font-size: 36px;
        font-weight: 900;
        line-height: 37.4px;
        color: #fff;
        margin-left: 7px;
        @include mq($until: tablet) {
            color: #d95283;
            margin: 0;
        }
        @include mq($from: desktop) {
            font-size: 59.4px;
            line-height: 61.8px;
        }
    }
    // .newsletter-section__subTitle
    &__subTitle {
        text-shadow: 0 4px 5px rgb(0 0 0 / 25%);
        font-family: $lekton;
        font-size: 13px;
        letter-spacing: -0.13px;
        text-align: left;
        color: #fff;
        margin-left: 1rem;
        @include mq($until: tablet) {
            color: #050505;
            font-family: Poppins;
            text-shadow: none;
            margin: 0 0 1rem 0;
        }
        @include mq($from: desktop) {
            font-size: 20.4px;
            line-height: 23.5px;
            letter-spacing: -0.2px;
            margin: 1rem 0 2rem 1rem;
        }
    }
    // .newsletter-section__form
    &__form {
        display: flex;
        border: 1px solid #fff;
        border-radius: 6px;
        overflow: hidden;
        @include mq($until: tablet) {
            -webkit-backdrop-filter: blur(26px);
            backdrop-filter: blur(26px);
            border: solid 0 #fff !important;
            background-color: #efefef !important;
            margin-bottom: 0;
        }
        input {
            padding: 0.5rem 0.8rem;
            font-family: "Poppins";
            font-size: 12px;
            letter-spacing: -0.12px;
            text-align: left;
            color: #fff;
            background-color: $background-color;
            min-width: 200px;
            width: 100%;
            flex-basis: 80%;
            border: none;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            @include mq($until: tablet) {
                min-width: min-content;
            }
            @include mq($from: desktop) {
                font-size: 18.7px;
                font-weight: bold;
                letter-spacing: -0.19px;
            }
            &:focus {
                outline: none;
            }
            &::placeholder {
                color: rgba(255, 255, 255, 0.4);
                @include mq($until: tablet) {
                    color: #9f9f9f;
                }
            }
        }
        button {
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            background-color: #fff;
            -webkit-text-stroke: 0.2px #000;
            font-family: $lekton;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: -0.16px;
            line-height: 1.5px;
            text-align: center;
            color: #000;
            flex-basis: 20%;
            border: 1px solid #d95283;
            transition: 0.05s ease-out;
            @include mq($until: tablet) {
                border-radius: 5px;
                background-color: #d95283;
                color: #fff;
            }
            &:hover {
                color: #fff;
                border: 1px solid #fff;
                background-color: #0d0c0c;
            }
            @include mq($from: desktop) {
                font-size: 23.8px;
                letter-spacing: -0.24px;
            }
        }
    }
    span.wpcf7-not-valid-tip {
        display: none;
        position: absolute;
        top: 50px;
        font-size: 16px;
        text-transform: lowercase;
        @include mq($from: desktop) {
            top: 60px;
            font-size: 20px;
        }
    }
    div.wpcf7-response-output {
        border: none;
        margin: 0;
        padding: 0;
        font-size: 12px;
        text-transform: lowercase;
        @include mq($from: desktop) {
            font-size: 16px;
        }
    }
}
// Blog Section
.blog-section {
    padding: 0 0 3rem 0;
    @include mq($from: desktop) {
        max-width: 1000px;
        margin: 7rem auto;
    }
    @include mq($from: desktop-xl) {
        max-width: 1200px;
    }
    // .blog-section__title
    &__title {
        font-size: 14px;
        font-weight: 900;
        line-height: 13.1px;
        text-align: left;
        color: #fff;
        margin: 0 0 1rem 2rem;
        @include mq($from: desktop) {
            font-size: 35.4px;
            font-weight: 900;
            line-height: 27.4px;
            text-align: center;
            margin: 0 0 3rem 2rem;
        }
    }
    // .blog-section__cell
    &__cell {
        background-color: #fefefe;
        border-radius: 9px;
        overflow: hidden;
    }
    // .blog-section__content
    &__content {
        padding: 1.5rem 1rem;
        @include mq($from: desktop) {
            padding: 2.35rem;
        }
    }
    // .blog-section__readTime
    &__readTime {
        flex-grow: 0;
        font-family: "Poppins";
        font-size: 9px;
        font-weight: bold;
        line-height: 12.3px;
        letter-spacing: 0.14px;
        text-align: left;
        color: #0d0c0c;
        margin-bottom: 5px;
        @include mq($from: desktop) {
            font-size: 15.9px;
            line-height: 21.7px;
        }
    }
    // .blog-section__newsLetterTitle
    &__newsLetterTitle {
        flex-grow: 0;
        font-size: 17px;
        font-weight: 900;
        line-height: 22.4px;
        letter-spacing: -0.09px;
        text-align: left;
        color: #000;
        margin-bottom: 0;
        min-height: 68px;
        transition: all 0.1s ease-out;
        @include mq($from: desktop) {
            font-size: 28px;
            line-height: 31px;
            letter-spacing: 1.5px;
        }
    }
    // .blog-section__sliderImg
    .blog-carousel {
        a {
            text-decoration: none;
            &:hover {
                .blog-section__sliderImg {
                    img {
                        transform: scale(1.25);
                    }
                }
                .blog-section__newsLetterTitle {
                    color: #bbcea8;
                }
            }
        }
        .flickity-viewport {
            height: 325px;
            @include mq($from: desktop) {
                height: 550px;
            }
            .post-thumbnail {
                overflow: hidden;
                .placeholder-image {
                    opacity: 0.6;
                }
            }
        }
        .carousel-cell {
            width: 50%;
            height: 100%;
            margin-right: 5px;
            @include mq($from: desktop) {
                width: 33.33%;
            }
            &.is-selected {
                // width: 80%;
                .blog-section__cell {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    @include mq($until: tablet) {
                        -webkit-transform: scale(0.9);
                        transform: scale(0.9);
                    }
                }
                .blog-section__newsLetterTitle {
                    @include mq($from: desktop) {
                        line-height: 38px;
                    }
                }
                .blog-section__content {
                    @include mq($from: desktop) {
                        padding: 2rem;
                    }
                }
                .blog-section__sliderImg {
                    @include mq($from: desktop) {
                        height: 65%;
                    }
                }
            }
            .blog-section__cell {
                -webkit-transform: scale(0.9);
                transform: scale(0.9);
                transition: 0.2s ease-in-out;
                @include mq($from: desktop) {
                    height: 100%;
                }
            }
        }
        .flickity-page-dots {
            text-align: end;
            left: -2rem;
            display: flex;
            justify-content: end;
            align-items: center;
            .dot {
                width: 5px;
                height: 5px;
                opacity: 1;
                margin: 0 5px;
                background-color: #252323;
                @include mq($from: desktop) {
                    width: 8px;
                    height: 8px;
                    opacity: 1;
                    margin: 0 7px;
                }
            }
            .dot.is-selected {
                width: 10px;
                height: 10px;
                background-color: #fff;
                @include mq($from: desktop) {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }
    &__sliderImg {
        img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            transition: all 0.25s ease-out;
            @include mq($from: desktop) {
                height: 350px;
            }
        }
    }
}
.shop-section {
    // .shop-section__wrapper
    display: none;
    &__wrapper {
        @include mq($from: desktop) {
            display: none;
        }
    }
    // .shop-section__shopImage
    &__shopImage {
        width: 100%;
    }
    // .shop-section__category
    &__category {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        // .leggings-category {
        //     background-image: url("/wp-content/themes/kirgo-theme/assets/images/home-page/leggings.jpg");
        // }
        // .sports-category {
        //     background-image: url("/wp-content/themes/kirgo-theme/assets/images/home-page/sports.jpg");
        // }
    }
    // .shop-section__link
    &__link {
        font-size: 22.1px;
        font-weight: 900;
        line-height: 23px;
        text-align: left;
        color: #fff;
        padding: 3.5rem 1rem 1rem;
        flex-basis: 48%;
        border-radius: 9px;
        background-repeat: no-repeat;
        text-decoration: none;
        background-size: cover;
    }
    // .shop-section__text
    &__text {
        display: block;
        font-family: $blaak-black-light;
        font-size: 12.9px;
        font-weight: 300;
        font-style: italic;
        line-height: 12.1px;
        text-align: left;
        color: #fff;
    }
    // .shop-section__wrapperDesktop
    &__wrapperDesktop {
        display: none;
        @include mq($from: desktop) {
            display: block;
        }
        .shop-gallery {
            .flickity-viewport {
                height: 450px;
                @include mq($from: desktop) {
                    height: 450px;
                }
            }
            .carousel-cell {
                border-radius: 9px;
                overflow: hidden;
                &:hover {
                    .shop-section__shopImage {
                        transform: scale(1.1);
                    }
                }
                @include mq($from: desktop) {
                    width: 32%;
                    margin-right: 30px;
                }
            }
            .flickity-button {
                display: none;
                @include mq($from: desktop) {
                    display: block;
                    top: calc(100% + 3rem);
                    background: #0000;
                    color: #0000;
                }
                &:hover {
                    opacity: 0.5;
                }
                .flickity-button-icon {
                    display: none;
                }
            }
            .flickity-prev-next-button.previous {
                @include mq($from: desktop) {
                    right: 12%;
                    left: unset;
                    &::after {
                        position: absolute;
                        content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/prev-arrow.svg");
                    }
                }
                @include mq($from: desktop-lg) {
                    right: 13%;
                }
            }
            .flickity-prev-next-button.next {
                @include mq($from: desktop) {
                    right: 9%;
                    &::after {
                        position: absolute;
                        content: url("/wp-content/themes/kirgo-theme/assets/images/home-page/next-arrow.svg");
                    }
                }
                @include mq($from: desktop-lg) {
                    right: 11%;
                }
            }
            .flickity-page-dots {
                display: none;
                @include mq($from: desktop) {
                    width: unset;
                    display: flex;
                    text-align: end;
                    justify-content: end;
                    align-items: center;
                    bottom: -4.3rem;
                    left: 75%;
                }
                @include mq($from: desktop-lg) {
                    left: 78%;
                }
                .dot {
                    width: 5px;
                    height: 5px;
                    opacity: 1;
                    margin: 0 5px;
                    background-color: #252323;
                }
                .dot.is-selected {
                    width: 10px;
                    height: 10px;
                    background-color: #fff;
                }
            }
        }
        // .shop-section__shopImage
        .shop-section__shopImage {
            height: 450px;
            object-fit: cover;
            border-radius: 9px;
            transition: all 0.25s ease-out;
        }
    }
}
.buyLink-section {
    @include mq($from: tablet) {
        display: none;
    }
    margin-top: 4rem;
    // .buyLink-section__wrapper
    &__wrapper {
    }
    // .buyLink-section__links
    &__links {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    // .buyLink-section__link
    &__link {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0.9px 28.3px 0 #0001;
    }
    // .buyLink-section__linkImage
    &__linkImage {
        width: 100%;
        height: 540px;
        object-fit: cover;
        @include mq($until: tablet) {
            height: 100%;
        }
    }
    // .buyLink-section__linkMain
    &__linkMain {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 1.5rem;
        margin: auto;
        width: 90%;
        padding: 1rem;
        border-radius: 4.7px;
        border: solid 1px #fff;
        background-color: #fefefe;
        font-family: Poppins;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: -0.16px;
        text-align: center;
        color: #0d0c0c;
        text-decoration: none;
    }
    .summer {
        &.buyLink-section__link {
            img {
                @include mq($until: tablet) {
                    transform: scale(1.2) translate(0px, 20px);
                }
            }
        }
        .buyLink-section__linkMain {
            color: #de5386;
        }
    }
    .classic {
    }
}
.kirgo-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 3rem;
}
.classic-section__link.leggings-category .mobile-elements {
    .homepage-product-image {
        .summer-leggins-img {
            transform: scale(1.5) translate(0px, -30px) !important;
        }
    }
}
```

## File: assets/js/app.js
```javascript
jQuery(document).ready(function ($) {
/**
     * Navbar
     */
// Navbar Menu
$(".navbar-hamburger").click(function (e) {
e.preventDefault();
$(".navbar").toggleClass("active.white-background");
$(".navbar").toggleClass("active");
$("body").toggleClass("isFixed");
⋮----
// set the target element and the class name to toggle
var navbar = $(".navbar");
⋮----
$(window).on("scroll", function () {
// get the current scroll position
var scrollPosition = $(window).scrollTop();
// check if the scroll position is greater than or equal to the height of the navbar
⋮----
// toggle the class on the navbar with animation
⋮----
.toggleClass(className, true)
.animate({ backgroundColor: "#f8f8f8" }, 500);
⋮----
.toggleClass(className, false)
.animate({ backgroundColor: "transparent" }, 500);
⋮----
$(".navbar-links").scroll(function () {
let scroll = $(".navbar-links").scrollTop();
⋮----
(scroll > 10 && !$(".active").hasClass("white-background")) ||
(scroll === 0 && $(".active").hasClass("white-background"))
⋮----
$(".active").toggleClass("white-background");
⋮----
/**
     * Home Page
     */
// Home Slider
let $homeCarousel = $(".home-carousel");
$homeCarousel.flickity({
⋮----
// Blog Slider
let $blogCarousel = $(".blog-carousel");
$blogCarousel.flickity({
⋮----
/**
     * Product Page
     */
$(".woocommerce-Reviews .commentlist").flickity({
⋮----
// Gallery Slider
let $galleryCarousel = $(".shop-gallery");
$galleryCarousel.flickity({
⋮----
/**
     * Product Page
     **/
// Toggle Review Form
$("#review_form .comment-reply-title").click(function () {
$(".woocommerce #review_form .comment-form").toggle();
⋮----
// Change the Review Title text
const element = $("#reply-title");
⋮----
element.text(newText);
// Add double qoutes to Reviews
⋮----
document.querySelectorAll(".description p");
⋮----
// Hide WooCommerce notices after 5 seconds
setTimeout(function () {
$(".woocommerce-notices-wrapper").fadeOut("slow");
⋮----
// Remove WooCommerce notices when clicked
$(document).on(
⋮----
$(this).fadeOut("slow");
⋮----
// Update the cart quantity bu clicling plus/minus on Cart page
$(".quantity").on("click", ".plus, .minus", function (e) {
⋮----
// Get the input field and current quantity value for this cart item
var $input = $(this).closest(".quantity").find("input.qty"),
currentVal = parseInt($input.val());
// Determine the new quantity value based on the button clicked
if ($(this).hasClass("plus")) {
⋮----
// Update the input field value and trigger the "change" event to update the cart
$input.val(newVal).trigger("change");
⋮----
// Replace placeholder name of coupon input
$(".woocommerce-cart .coupon .input-text").attr(
⋮----
// Replace the labels to their respective placeholders
let inputElementsOnCheckout = $(
⋮----
let inputElementsOnSignIn = $(
⋮----
let inputElementsForShippingAddress = $(
⋮----
let inputElementsOnRegister = $(".custom-registration label");
const replacePlaceholderWithLabel = (inputElement) => {
inputElement.each(function () {
let labelVal = $(this).text();
let inputName = $(this).attr("for");
let inputPlaceholder = $("#" + inputName).attr("placeholder");
⋮----
$(this).text(inputPlaceholder);
$("#" + inputName).attr("placeholder", labelVal);
⋮----
replacePlaceholderWithLabel(inputElementsOnCheckout);
replacePlaceholderWithLabel(inputElementsOnSignIn);
replacePlaceholderWithLabel(inputElementsOnRegister);
replacePlaceholderWithLabel(inputElementsForShippingAddress);
// added Shipment text on checkout page
const container = $(".woocommerce-billing-fields__field-wrapper");
const newElement = $(
⋮----
container.find(">:nth-child(3)").after(newElement);
// Added image on account page
const accountPageElement = $(".woocommerce-account #page");
const newAccountPageElement = $(
⋮----
if (!$("body.woocommerce-page").hasClass("logged-in")) {
// Remove banner image when logged in
accountPageElement.find(">:nth-child(1)").after(newAccountPageElement);
// Keep full height when logged in
$(
⋮----
).css("height", "calc(100vh - 250px)");
⋮----
// Change the Sign In Title text
if (!$("body.woocommerce-account.logged-in")) {
const signInTextElement = $(
⋮----
signInTextElement.text(signInNewText);
⋮----
// Change the Sign In Title text on Register
const registerTextElement = $(".page-id-237 .custom-registration h2");
⋮----
registerTextElement.text(registerNewText);
// Change the Sign In Button Title text
const signInTextButtonElement = $(
⋮----
signInTextButtonElement.text(signInButtonNewText);
// Hide footer when user logout and show when login in
if ($("body").hasClass("woocommerce-account")) {
$(".footer-section").hide();
// if ($("body.woocommerce-account").hasClass("logged-in")) {
//     $("footer-section").show();
// } else {
//     $(".footer-section").hide();
// }
⋮----
// loop through all elements with the class name "woovr-variation-name"
$(".woovr-variation-name").each(function () {
let words = $(this).text().trim().split(" ");
⋮----
if (words.includes("Extra")) {
⋮----
newText = "X" + lastWord.charAt(0);
⋮----
newText = lastWord.charAt(0);
⋮----
$(this).text(newText.toUpperCase());
⋮----
$("body").hasClass("woocommerce-checkout") &&
!$("body.woocommerce-checkout").hasClass("woocommerce-order-received")
⋮----
const $checkoutButtonAncestor = $(".checkout.woocommerce-checkout");
const $checkoutNestedButton = $("#place_order");
⋮----
$checkoutNestedButton.appendTo($checkoutButtonAncestor);
⋮----
const requiredInputFields = $(
⋮----
const button = $("#place_order");
checkRequiredFields();
requiredInputFields.on("input", function () {
⋮----
function checkRequiredFields() {
⋮----
requiredInputFields.each(function () {
let inputVal = $(this).val();
if (!inputVal || inputVal.trim() === "") {
⋮----
button.prop("disabled", false);
⋮----
button.prop("disabled", true);
⋮----
if ($("body").hasClass("woocommerce-cart")) {
const $cartButtonAncestor = $(".woocommerce-cart .woocommerce");
const $cartNestedButton = $(".woocommerce-cart .checkout-button");
⋮----
$cartNestedButton.appendTo($cartButtonAncestor);
⋮----
if (window.location.href.indexOf("/cart/") > -1) {
$("a.navbar-cart").click(function (event) {
event.preventDefault();
⋮----
$("a.navbar-cart").addClass("disabled");
⋮----
$(".duplicate-elements").appendTo(
$(".woocommerce-product-details__short-description").parent().parent()
⋮----
const wow = new WOW();
wow.init();
⋮----
).addClass("wow animate__animated animate__fadeInUp");
// Disable the click event on the cart icon
$(".navbar-cart, .xoo-wsc-sc-cont").off("click");
if (!$("body").hasClass(".woocommerce-cart")) {
// Redirect the user to the cart page when they click on the cart icon
$(".navbar-cart, .xoo-wsc-sc-cont").click(function (e) {
⋮----
$(".navbar-cart").click(function (e) {
⋮----
$("body.single-product .wpcbn-btn-single.single_add_to_cart_button").click(
⋮----
setTimeout(() => {
⋮----
$(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").text(
⋮----
$(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").click(
⋮----
$(".cart-product-size-modal").modal("hide");
⋮----
).click(function () {
$(".shop-add-to-cart-modal").modal("hide");
⋮----
$(".product .psfw-social-wrap").appendTo(
⋮----
$(".navbar-admin-desktop svg").appendTo(".navbar-admin .xoo-el-action-sc");
// Shift checkout button in right coloum of desktop
⋮----
$(".woocommerce-cart .checkout-button.button").appendTo(
⋮----
$(".woocommerce-checkout .alternate-cart-products").appendTo(
⋮----
$(".woocommerce-checkout #place_order").appendTo(
⋮----
$(".woocommerce-checkout #order_review").prepend(
$(".woocommerce-checkout #order_review_heading")
⋮----
).appendTo(".woocommerce-checkout .woocommerce-order");
⋮----
).appendTo(
⋮----
$(".woocommerce-shop .product a.woocommerce-LoopProduct-link")
.contents()
.unwrap()
.wrap("<div></div>");
$(".classic-section .primary-link").click(() => {
⋮----
$(".nav-product-carousel").flickity({
⋮----
$(document).on("click", ".single_add_to_cart_button", function () {
⋮----
const $product = $(".woocommerce-shop .product.type-product.post-1406");
⋮----
$product.attr("id", "summerCollectionId");
⋮----
$(".home-arrow").on("click", function (e) {
⋮----
window.history.back();
```
