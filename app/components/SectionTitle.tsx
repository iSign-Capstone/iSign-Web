interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  const formatTitle = (text: string) => {
    return text.replace(
      /iSign/g,
      `<span style="color: #F9686A">i</span><span style="color: #343434">Sign</span>`
    );
  };

  return (
    <div className="reveal flex flex-col gap-3 text-center pt-0 py-0">
      <h2
  className="font-lexend text-4xl md:text-5xl leading-tight"
  style={{ color: '#343434' }}
  dangerouslySetInnerHTML={{ __html: formatTitle(title) }}
/>
{description && (
  <p className="font-louis font-bold text-base md:text-lg" style={{ color: '#343434' }}>
    {description}
  </p>
)}
    </div>
  );
}
