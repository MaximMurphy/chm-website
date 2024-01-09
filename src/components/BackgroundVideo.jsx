export default function BackgroundVideo() {
  return (
    <video
      src="/MVT_video.mp4"
      loop
      muted
      autoPlay
      playsInline
      className="object-cover w-auto lg:w-full h-screen -z-10"
    ></video>
  );
}
