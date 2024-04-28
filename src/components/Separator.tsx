import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

interface SeparatorProps extends ViewProps {
  height?: number;
  width?: number;
}

const Separator: FC<SeparatorProps> = ({
  height = 0,
  width = 0,
  ...extraProps
}) => <View style={{height, width, ...extraProps}} />;

export default Separator;
