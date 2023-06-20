import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { render } from '@testing-library/react-native';

import createDrawerNavigator from '../createDrawerNavigator';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }: any) => ({
    title: `Welcome ${
      navigation.state.params ? navigation.state.params.user : 'anonymous'
    }`,
    gesturesEnabled: true,
  });

  render() {
    return <View style={{ flex: 1 }} />;
  }
}

it('renders successfully', () => {
  const MyDrawerNavigator = createDrawerNavigator({ Home: HomeScreen });
  const App = createAppContainer(MyDrawerNavigator);
  const rendered = render(<App />).toJSON();

  expect(rendered).toMatchInlineSnapshot(`
    <View
      collapsable={false}
      forwardedRef={[Function]}
      handlerTag={1}
      handlerType="PanGestureHandler"
      onGestureHandlerEvent={[Function]}
      onGestureHandlerStateChange={[Function]}
      onLayout={[Function]}
      style={
        {
          "flex": 1,
          "overflow": "hidden",
        }
      }
    >
      <View
        collapsable={false}
        importantForAccessibility="yes"
        nativeID="animatedComponent"
        style={
          {
            "flex": 1,
            "transform": [
              {
                "translateX": 0,
              },
            ],
          }
        }
      >
        <RNSScreenContainer
          style={
            {
              "flex": 1,
            }
          }
        >
          <RNSScreen
            activityState={2}
            collapsable={false}
            forwardedRef={[Function]}
            gestureResponseDistance={
              {
                "bottom": -1,
                "end": -1,
                "start": -1,
                "top": -1,
              }
            }
            nativeID="animatedComponent"
            style={
              {
                "bottom": 0,
                "left": 0,
                "opacity": 1,
                "position": "absolute",
                "right": 0,
                "top": 0,
              }
            }
          >
            <View
              style={
                {
                  "flex": 1,
                }
              }
            />
          </RNSScreen>
        </RNSScreenContainer>
        <View
          collapsable={false}
          forwardedRef={[Function]}
          handlerTag={2}
          handlerType="TapGestureHandler"
          onGestureHandlerEvent={[Function]}
          onGestureHandlerStateChange={[Function]}
          style={
            {
              "backgroundColor": "rgba(0, 0, 0, 0.5)",
              "bottom": 0,
              "left": 0,
              "opacity": 0,
              "position": "absolute",
              "right": 0,
              "top": 0,
              "zIndex": undefined,
            }
          }
        />
      </View>
      <View
        accessibilityViewIsModal={false}
        collapsable={false}
        nativeID="animatedComponent"
        onLayout={[Function]}
        removeClippedSubviews={false}
        style={
          {
            "backgroundColor": "#fff",
            "bottom": 0,
            "left": undefined,
            "maxWidth": "100%",
            "opacity": {},
            "position": "absolute",
            "top": 0,
            "transform": [
              {
                "translateX": undefined,
              },
            ],
            "width": 320,
            "zIndex": 0,
          }
        }
      >
        <View
          style={
            [
              {
                "flex": 1,
              },
              undefined,
            ]
          }
        >
          <RCTScrollView
            alwaysBounceVertical={false}
          >
            <View>
              <View
                collapsable={false}
                forwardedRef={[Function]}
                nativeID="animatedComponent"
                onLayout={[Function]}
                pointerEvents="box-none"
                style={
                  {
                    "paddingBottom": 0,
                    "paddingLeft": 0,
                    "paddingRight": 0,
                    "paddingTop": 20,
                  }
                }
              >
                <View
                  style={
                    [
                      {
                        "paddingVertical": 4,
                      },
                      undefined,
                    ]
                  }
                >
                  <View
                    accessibilityLabel="Welcome anonymous"
                    accessible={true}
                    collapsable={false}
                    focusable={true}
                    nativeID="animatedComponent"
                    onClick={[Function]}
                    onResponderGrant={[Function]}
                    onResponderMove={[Function]}
                    onResponderRelease={[Function]}
                    onResponderTerminate={[Function]}
                    onResponderTerminationRequest={[Function]}
                    onStartShouldSetResponder={[Function]}
                    style={
                      {
                        "opacity": 1,
                      }
                    }
                  >
                    <View
                      collapsable={false}
                      forwardedRef={[Function]}
                      nativeID="animatedComponent"
                      onLayout={[Function]}
                      pointerEvents="box-none"
                      style={
                        {
                          "alignItems": "center",
                          "backgroundColor": "rgba(0, 0, 0, .04)",
                          "flexDirection": "row",
                          "paddingBottom": 0,
                          "paddingLeft": 0,
                          "paddingRight": 0,
                          "paddingTop": 0,
                        }
                      }
                    >
                      <Text
                        style={
                          [
                            {
                              "fontWeight": "bold",
                              "margin": 16,
                            },
                            {
                              "color": "#2196f3",
                            },
                            undefined,
                            undefined,
                          ]
                        }
                      >
                        Welcome anonymous
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </RCTScrollView>
        </View>
      </View>
    </View>
  `);
});
