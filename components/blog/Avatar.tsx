import { assetPath } from "@/lib/assetPath";

type Props = {
	name: string;
	picture: string;
};

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className="flex items-center">
			<img src={assetPath(picture)} className="w-7 h-7 rounded-full mr-4" alt={name} />
			<div className="font-semibold text-sm">{name}</div>
		</div>
	);
};

export default Avatar;
