import { Clock, Mic, MessageCircle, BookOpen } from 'lucide-react'

interface FeatureCardProps {
  icon: 'clock' | 'mic' | 'chat' | 'book'
  text: string
  bgColor: string
}

const iconMap = {
  clock: Clock,
  mic: Mic,
  chat: MessageCircle,
  book: BookOpen,
}

export default function FeatureCard({ icon, text, bgColor }: FeatureCardProps) {
  const Icon = iconMap[icon]

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-2 md:gap-3 px-5 py-4 rounded-2xl border-[3px] border-[#343434] text-center md:text-left"
      style={{ backgroundColor: bgColor, boxShadow: '4px 4px 0px #343434' }}
    >
      <Icon size={28} color="#343434" strokeWidth={2.5} className="flex-shrink-0" />
      <span className="font-louis font-bold text-sm leading-snug" style={{ color: '#343434' }}>
        {text}
      </span>
    </div>
  )
}
