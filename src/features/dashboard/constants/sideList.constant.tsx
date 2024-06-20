import { Dashboard } from "@mui/icons-material";
import {
  DashboardSideListPathsEnum,
  DashboardSideListTitlesEnum,
} from "../../../config/enums/dashboardSideList.enum";
import { Main } from "../../main/Main";
export const DashboardSideList = (
  setselectedPath: React.Dispatch<React.SetStateAction<string>>
) => [
  {
    title: DashboardSideListTitlesEnum.MAIN,
    icon: <Dashboard />,
    path: DashboardSideListPathsEnum.ROOT,
    component: (
      <Main
        setselectedPath={setselectedPath}
        path={DashboardSideListPathsEnum.ROOT}
      />
    ),
  },
];
