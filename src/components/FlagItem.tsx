import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {Colors, Fonts} from '../contants';
import {StaticImageService} from '../services';

interface FlagItemProps {
  code: string;
  name: string;
  dial_code: string;
  onPress: (data: {code: string; name: string; dial_code: string}) => void;
}

const FlagItem: FC<FlagItemProps> = ({code, name, dial_code, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({code, name, dial_code})}>
      <Image
        style={styles.flagImage}
        source={{uri: StaticImageService.getFlagIcon(code)}}
      />
      <Text style={styles.flagText}>{dial_code}</Text>
      <Text style={styles.flagText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  flagImage: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  flagText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginRight: 10,
  },
});

export default FlagItem;
