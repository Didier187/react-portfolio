import Avatar from "./Avatar";
import HeaderFrame from "./HeaderFrame";
import Tabs from "./Tabs";

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="header-section">
        <HeaderFrame name="Didier H." role="Software developer in Sydney" />
        <div className="gradient-box">
          <Avatar />
        </div>
      </div>
      <Tabs />

      <div className="tab-content">{children}</div>
    </div>
  );
}
