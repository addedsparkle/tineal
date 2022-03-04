import Plan from "./Plan";

export default interface PlanStore {
  lastUpdate: number;
  plans: Plan[];
}
