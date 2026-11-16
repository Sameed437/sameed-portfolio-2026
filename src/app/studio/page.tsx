import type { Metadata } from 'next';
import WorkflowStudio from '@/components/WorkflowStudio';

export const metadata: Metadata = {
  title: 'AI Automation Studio & Architecture Inspector',
  description:
    'Interactive AI pipeline architecture inspector and operations ROI calculator. Test production workflow telemetry, Claude prompt schemas, and calculate reclaimed operational hours.',
};

export default function StudioPage() {
  return <WorkflowStudio standalone={true} />;
}
