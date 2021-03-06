import { config } from '../config/config';

const getPutSignedUrl = async (
	fileName: string
): Promise<{ status: number; url: string }> => {
	const res = await fetch(`${config.IMAGE_UPLOAD_URL}/${fileName}`);
	const data = await res.json();
	return { status: res.status, url: data.url };
};

export const uploadImage = async (file: File): Promise<number> => {
	const { url } = await getPutSignedUrl(file.name);

	const res = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': `image/${file.type}`,
		},
		body: file,
	});

	return res.status;
};
