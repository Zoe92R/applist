import { cn } from "@/components/ui/cn";

export type ProcessStep = {
  name: string;
  done: boolean;
};

export const StepState = {
  Done: "done",
  Current: "current",
  Pending: "pending",
} as const;

export type StepState = (typeof StepState)[keyof typeof StepState];

export function stepStates(steps: ProcessStep[]): StepState[] {
  const current = steps.findIndex((step) => !step.done);
  return steps.map((step, i) =>
    step.done ? StepState.Done : i === current ? StepState.Current : StepState.Pending,
  );
}

const row = "flex min-h-6.5 items-center gap-2 text-sm";

const states: Record<StepState, { text: string; dot: string; label: string }> = {
  [StepState.Done]: { text: "text-neutral-600", dot: "bg-success-700", label: "completed" },
  [StepState.Current]: {
    text: "font-medium text-neutral-900",
    dot: "bg-neutral-900",
    label: "current step",
  },
  [StepState.Pending]: { text: "text-neutral-600", dot: "bg-neutral-400", label: "not started" },
};

export type ProcessListProps = {
  steps: ProcessStep[];
  className?: string;
};

export function ProcessList({ steps, className = "" }: ProcessListProps) {
  const stepState = stepStates(steps);
  return (
    <ol className={cn("flex flex-col gap-0.5", className)}>
      {steps.map((step, i) => {
        const style = states[stepState[i]];
        return (
          <li
            key={i}
            aria-current={stepState[i] === StepState.Current ? "step" : undefined}
            className={`${row} ${style.text}`}
          >
            <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${style.dot}`} />
            {step.name}
            <span className="sr-only">, {style.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
