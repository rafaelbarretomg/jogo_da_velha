// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const curves = flutter_sdk.src__animation__curves;
  const navigator = flutter_sdk.src__widgets__navigator;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const sliver_grid = flutter_sdk.src__rendering__sliver_grid;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const box_border = flutter_sdk.src__painting__box_border;
  const colors = flutter_sdk.src__material__colors;
  const text_style = flutter_sdk.src__painting__text_style;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $any = dartx.any;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    BuildContextAndintToGestureDetector: () => (T.BuildContextAndintToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3], ui.Locale);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: app.ThemeMode.prototype,
        [_Enum__name]: "system",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.constList([], navigator.NavigatorObserver);
    },
    get C8() {
      return C[8] = dart.constMap(core.String, T.BuildContextToWidget(), []);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: main.GamePage.prototype,
        [Widget_key]: null
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: app.MaterialApp.prototype,
        [Widget_key]: null,
        [MaterialApp_useInheritedMediaQuery]: false,
        [MaterialApp_debugShowMaterialGrid]: false,
        [MaterialApp_scrollBehavior]: null,
        [MaterialApp_restorationScopeId]: null,
        [MaterialApp_actions]: null,
        [MaterialApp_shortcuts]: null,
        [MaterialApp_debugShowCheckedModeBanner]: false,
        [MaterialApp_showSemanticsDebugger]: false,
        [MaterialApp_checkerboardOffscreenLayers]: false,
        [MaterialApp_checkerboardRasterCacheImages]: false,
        [MaterialApp_showPerformanceOverlay]: false,
        [MaterialApp_supportedLocales]: C[2] || CT.C2,
        [MaterialApp_localeResolutionCallback]: null,
        [MaterialApp_localeListResolutionCallback]: null,
        [MaterialApp_localizationsDelegates]: null,
        [MaterialApp_locale]: null,
        [MaterialApp_color]: null,
        [MaterialApp_themeAnimationCurve]: C[4] || CT.C4,
        [MaterialApp_themeAnimationDuration]: C[5] || CT.C5,
        [MaterialApp_themeMode]: C[6] || CT.C6,
        [MaterialApp_highContrastDarkTheme]: null,
        [MaterialApp_highContrastTheme]: null,
        [MaterialApp_darkTheme]: null,
        [MaterialApp_theme]: null,
        [MaterialApp_onGenerateTitle]: null,
        [MaterialApp_title]: "Jogo da Velha",
        [MaterialApp_builder]: null,
        [MaterialApp_routerConfig]: null,
        [MaterialApp_backButtonDispatcher]: null,
        [MaterialApp_routerDelegate]: null,
        [MaterialApp_routeInformationParser]: null,
        [MaterialApp_routeInformationProvider]: null,
        [MaterialApp_navigatorObservers]: C[7] || CT.C7,
        [MaterialApp_onUnknownRoute]: null,
        [MaterialApp_onGenerateInitialRoutes]: null,
        [MaterialApp_onGenerateRoute]: null,
        [MaterialApp_initialRoute]: null,
        [MaterialApp_routes]: C[8] || CT.C8,
        [MaterialApp_home]: C[9] || CT.C9,
        [MaterialApp_scaffoldMessengerKey]: null,
        [MaterialApp_navigatorKey]: null
      });
    },
    get C11() {
      return C[11] = dart.constList([0, 1, 2], core.int);
    },
    get C12() {
      return C[12] = dart.constList([3, 4, 5], core.int);
    },
    get C13() {
      return C[13] = dart.constList([6, 7, 8], core.int);
    },
    get C14() {
      return C[14] = dart.constList([0, 3, 6], core.int);
    },
    get C15() {
      return C[15] = dart.constList([1, 4, 7], core.int);
    },
    get C16() {
      return C[16] = dart.constList([2, 5, 8], core.int);
    },
    get C17() {
      return C[17] = dart.constList([0, 4, 8], core.int);
    },
    get C18() {
      return C[18] = dart.constList([2, 4, 6], core.int);
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18], T.ListOfint());
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Jogo da Velha"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.prototype,
        [SliverGridDelegateWithFixedCrossAxisCount_mainAxisExtent]: null,
        [SliverGridDelegateWithFixedCrossAxisCount_childAspectRatio]: 1,
        [SliverGridDelegateWithFixedCrossAxisCount_crossAxisSpacing]: 0,
        [SliverGridDelegateWithFixedCrossAxisCount_mainAxisSpacing]: 0,
        [SliverGridDelegateWithFixedCrossAxisCount_crossAxisCount]: 3
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 95,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 50,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 30,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[26] || CT.C26,
        [Text_textSpan]: null,
        [Text_data]: "Reiniciar"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(28).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  var MaterialApp_useInheritedMediaQuery = dart.privateName(app, "MaterialApp.useInheritedMediaQuery");
  var MaterialApp_debugShowMaterialGrid = dart.privateName(app, "MaterialApp.debugShowMaterialGrid");
  var MaterialApp_scrollBehavior = dart.privateName(app, "MaterialApp.scrollBehavior");
  var MaterialApp_restorationScopeId = dart.privateName(app, "MaterialApp.restorationScopeId");
  var MaterialApp_actions = dart.privateName(app, "MaterialApp.actions");
  var MaterialApp_shortcuts = dart.privateName(app, "MaterialApp.shortcuts");
  var MaterialApp_debugShowCheckedModeBanner = dart.privateName(app, "MaterialApp.debugShowCheckedModeBanner");
  var MaterialApp_showSemanticsDebugger = dart.privateName(app, "MaterialApp.showSemanticsDebugger");
  var MaterialApp_checkerboardOffscreenLayers = dart.privateName(app, "MaterialApp.checkerboardOffscreenLayers");
  var MaterialApp_checkerboardRasterCacheImages = dart.privateName(app, "MaterialApp.checkerboardRasterCacheImages");
  var MaterialApp_showPerformanceOverlay = dart.privateName(app, "MaterialApp.showPerformanceOverlay");
  var Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  var Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  var Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  var MaterialApp_supportedLocales = dart.privateName(app, "MaterialApp.supportedLocales");
  var MaterialApp_localeResolutionCallback = dart.privateName(app, "MaterialApp.localeResolutionCallback");
  var MaterialApp_localeListResolutionCallback = dart.privateName(app, "MaterialApp.localeListResolutionCallback");
  var MaterialApp_localizationsDelegates = dart.privateName(app, "MaterialApp.localizationsDelegates");
  var MaterialApp_locale = dart.privateName(app, "MaterialApp.locale");
  var MaterialApp_color = dart.privateName(app, "MaterialApp.color");
  var MaterialApp_themeAnimationCurve = dart.privateName(app, "MaterialApp.themeAnimationCurve");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var MaterialApp_themeAnimationDuration = dart.privateName(app, "MaterialApp.themeAnimationDuration");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var MaterialApp_themeMode = dart.privateName(app, "MaterialApp.themeMode");
  var MaterialApp_highContrastDarkTheme = dart.privateName(app, "MaterialApp.highContrastDarkTheme");
  var MaterialApp_highContrastTheme = dart.privateName(app, "MaterialApp.highContrastTheme");
  var MaterialApp_darkTheme = dart.privateName(app, "MaterialApp.darkTheme");
  var MaterialApp_theme = dart.privateName(app, "MaterialApp.theme");
  var MaterialApp_onGenerateTitle = dart.privateName(app, "MaterialApp.onGenerateTitle");
  var MaterialApp_title = dart.privateName(app, "MaterialApp.title");
  var MaterialApp_builder = dart.privateName(app, "MaterialApp.builder");
  var MaterialApp_routerConfig = dart.privateName(app, "MaterialApp.routerConfig");
  var MaterialApp_backButtonDispatcher = dart.privateName(app, "MaterialApp.backButtonDispatcher");
  var MaterialApp_routerDelegate = dart.privateName(app, "MaterialApp.routerDelegate");
  var MaterialApp_routeInformationParser = dart.privateName(app, "MaterialApp.routeInformationParser");
  var MaterialApp_routeInformationProvider = dart.privateName(app, "MaterialApp.routeInformationProvider");
  var MaterialApp_navigatorObservers = dart.privateName(app, "MaterialApp.navigatorObservers");
  var MaterialApp_onUnknownRoute = dart.privateName(app, "MaterialApp.onUnknownRoute");
  var MaterialApp_onGenerateInitialRoutes = dart.privateName(app, "MaterialApp.onGenerateInitialRoutes");
  var MaterialApp_onGenerateRoute = dart.privateName(app, "MaterialApp.onGenerateRoute");
  var MaterialApp_initialRoute = dart.privateName(app, "MaterialApp.initialRoute");
  var MaterialApp_routes = dart.privateName(app, "MaterialApp.routes");
  var MaterialApp_home = dart.privateName(app, "MaterialApp.home");
  var MaterialApp_scaffoldMessengerKey = dart.privateName(app, "MaterialApp.scaffoldMessengerKey");
  var MaterialApp_navigatorKey = dart.privateName(app, "MaterialApp.navigatorKey");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return C[1] || CT.C1;
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.GamePage = class GamePage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.GamePage.new({key: key});
    }
    createState() {
      return new main._GamePageState.new();
    }
  };
  (main.GamePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.GamePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.GamePage.prototype;
  dart.addTypeTests(main.GamePage);
  dart.addTypeCaches(main.GamePage);
  dart.setMethodSignature(main.GamePage, () => ({
    __proto__: dart.getMethods(main.GamePage.__proto__),
    createState: dart.fnType(framework.State$(main.GamePage), [])
  }));
  dart.setLibraryUri(main.GamePage, I[0]);
  var _board = dart.privateName(main, "_board");
  var _turn = dart.privateName(main, "_turn");
  var _winner = dart.privateName(main, "_winner");
  var _winningLine = dart.privateName(main, "_winningLine");
  var _checkWin = dart.privateName(main, "_checkWin");
  var _findWinningLine = dart.privateName(main, "_findWinningLine");
  var _makeMove = dart.privateName(main, "_makeMove");
  var _restartGame = dart.privateName(main, "_restartGame");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var SliverGridDelegateWithFixedCrossAxisCount_mainAxisExtent = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.mainAxisExtent");
  var SliverGridDelegateWithFixedCrossAxisCount_childAspectRatio = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.childAspectRatio");
  var SliverGridDelegateWithFixedCrossAxisCount_crossAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisSpacing");
  var SliverGridDelegateWithFixedCrossAxisCount_mainAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.mainAxisSpacing");
  var SliverGridDelegateWithFixedCrossAxisCount_crossAxisCount = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisCount");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  main._GamePageState = class _GamePageState extends framework.State$(main.GamePage) {
    [_makeMove](index) {
      if (this[_winner][$isNotEmpty] || this[_board][$_get](index)[$isNotEmpty]) {
        return;
      }
      this.setState(dart.fn(() => {
        this[_board][$_set](index, this[_turn]);
        if (this[_checkWin]()) {
          this[_winner] = this[_turn];
          this[_findWinningLine]();
        } else if (!this[_board][$any](dart.fn(element => element[$isEmpty], T.StringTobool()))) {
          this[_winner] = "Empate";
        } else {
          this[_turn] = this[_turn] === "X" ? "O" : "X";
        }
      }, T.VoidTovoid()));
    }
    [_findWinningLine]() {
      let winningCombinations = C[10] || CT.C10;
      for (let combination of winningCombinations) {
        if (this[_board][$_get](combination[$_get](0)) === this[_board][$_get](combination[$_get](1)) && this[_board][$_get](combination[$_get](1)) === this[_board][$_get](combination[$_get](2)) && this[_board][$_get](combination[$_get](0))[$isNotEmpty]) {
          this[_winningLine] = combination;
          break;
        }
      }
    }
    [_checkWin]() {
      let winningCombinations = C[10] || CT.C10;
      for (let combination of winningCombinations) {
        if (this[_board][$_get](combination[$_get](0)) === this[_board][$_get](combination[$_get](1)) && this[_board][$_get](combination[$_get](1)) === this[_board][$_get](combination[$_get](2)) && this[_board][$_get](combination[$_get](0))[$isNotEmpty]) {
          return true;
        }
      }
      return false;
    }
    [_restartGame]() {
      this.setState(dart.fn(() => {
        this[_board] = T.ListOfString().filled(9, "");
        this[_turn] = "X";
        this[_winner] = "";
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[19] || CT.C19}), body: new basic.Center.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new scroll_view.GridView.builder({gridDelegate: C[20] || CT.C20, itemCount: 9, itemBuilder: dart.fn((context, index) => new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this[_makeMove](index), T.VoidTovoid()), child: new container.Container.new({margin: C[21] || CT.C21, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: this[_winningLine][$contains](index) ? colors.Colors.red : colors.Colors.black, width: this[_winningLine][$contains](index) ? 5 : 1})}), child: new basic.Center.new({child: new text.Text.new(this[_board][$_get](index), {style: C[22] || CT.C22})})})}), T.BuildContextAndintToGestureDetector())})}), new text.Text.new(this[_winner][$isEmpty] ? "Vez de " + this[_turn] : this[_winner] === "Empate" ? "Empate!" : "Vencedor: " + this[_winner], {style: C[23] || CT.C23}), new basic.Padding.new({padding: C[24] || CT.C24, child: new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _restartGame), child: C[25] || CT.C25})})])})})});
    }
    static ['_#new#tearOff']() {
      return new main._GamePageState.new();
    }
  };
  (main._GamePageState.new = function() {
    this[_board] = T.ListOfString().filled(9, "");
    this[_turn] = "X";
    this[_winner] = "";
    this[_winningLine] = T.JSArrayOfint().of([]);
    main._GamePageState.__proto__.new.call(this);
    ;
  }).prototype = main._GamePageState.prototype;
  dart.addTypeTests(main._GamePageState);
  dart.addTypeCaches(main._GamePageState);
  dart.setMethodSignature(main._GamePageState, () => ({
    __proto__: dart.getMethods(main._GamePageState.__proto__),
    [_makeMove]: dart.fnType(dart.void, [core.int]),
    [_findWinningLine]: dart.fnType(dart.void, []),
    [_checkWin]: dart.fnType(core.bool, []),
    [_restartGame]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._GamePageState, I[0]);
  dart.setFieldSignature(main._GamePageState, () => ({
    __proto__: dart.getFields(main._GamePageState.__proto__),
    [_board]: dart.fieldType(core.List$(core.String)),
    [_turn]: dart.fieldType(core.String),
    [_winner]: dart.fieldType(core.String),
    [_winningLine]: dart.fieldType(core.List$(core.int))
  }));
  main.main = function main$0() {
    binding.runApp(C[27] || CT.C27);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UC7C4B;AACxB;IAKF;;;QATkB;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;;;;;;AAgBR;IAAgB;;;QAH5B;AAAQ,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBAYzB;AACjB,UAAI,AAAQ,8BAAc,AAAM,AAAQ,oBAAP,KAAK;AACpC;;AAYA,MAVF,cAAS;AACc,QAArB,AAAM,oBAAC,KAAK,EAAI;AAChB,YAAI;AACa,UAAf,gBAAU;AACQ,UAAlB;cACK,MAAK,AAAO,mBAAI,QAAC,WAAY,AAAQ,OAAD;AACvB,UAAlB,gBAAU;;AAEsB,UAAhC,cAAQ,AAAM,gBAAG,MAAM,MAAM;;;IAGnC;;AAEQ;AAUN,eAAS,cAAe,oBAAmB;AACzC,YAAI,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC,QAAO,AAAM,oBAAC,AAAW,WAAA,QAAC,OAC7C,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC,QAAO,AAAM,oBAAC,AAAW,WAAA,QAAC,OAC7C,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC;AACK,UAA1B,qBAAe,WAAW;AAC1B;;;IAGN;;AAGQ;AAUN,eAAS,cAAe,oBAAmB;AACzC,YAAI,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC,QAAO,AAAM,oBAAC,AAAW,WAAA,QAAC,OAC7C,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC,QAAO,AAAM,oBAAC,AAAW,WAAA,QAAC,OAC7C,AAAM,AAAiB,oBAAhB,AAAW,WAAA,QAAC;AACrB,gBAAO;;;AAGX,YAAO;IACT;;AAOI,MAJF,cAAS;AAC4B,QAAnC,eAAS,wBAAoB,GAAG;AACrB,QAAX,cAAQ;AACI,QAAZ,gBAAU;;IAEd;UAG0B;AACxB,YAAO,oCACG,wDAGF,6BACG,gCACK,wBACR,+BACkB,4EAIH,gBACE,SAAC,SAAS,UACd,iDACE,cAAM,gBAAU,KAAK,2BACrB,kEAEO,8CACK,8BACN,AAAa,8BAAS,KAAK,IAAW,oBAAa,4BACrD,AAAa,8BAAS,KAAK,IAAI,IAAI,cAGrC,6BACE,kBACL,AAAM,oBAAC,KAAK,kFAS1B,kBACE,AAAQ,0BACF,AACF,YADW,cACT,AAAQ,kBAAG,WACP,YACA,AAAoB,eAAR,0CAGxB,wDAES,6DACM;IAQzB;;;;;;IA/Ha,eAAS,wBAAoB,GAAG;IACtC,cAAQ;IACR,gBAAU;IACL,qBAAe;;;EA6H7B;;;;;;;;;;;;;;;;;;;;AAxJuB,IAArB;EACF;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
