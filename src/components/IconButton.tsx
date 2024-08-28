import { type PropsWithChildren } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { ThemedText } from './ThemedText';

interface IIconButton extends PropsWithChildren {
	name: string;
}

function IconButton({ name, children }: IIconButton) {
	return (
		<FontAwesome.Button
			name={name}
			backgroundColor="#444"
			color="#fff"
			size={16}
			borderRadius={20}
			onPress={(e) => e.preventDefault()}
		>
			<ThemedText type="small">{children}</ThemedText>
		</FontAwesome.Button>
	);
}

export default IconButton;
