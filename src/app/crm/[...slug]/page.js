import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { MdMoreHoriz } from "react-icons/md";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";

const Component = () => {
  return (
    <div className="h-[calc(100dvh-25px)] overflow-scroll">
      <div className="px-6 py-3 w-full">
        <div className="flex">
          <h1 className="text-2xl font-semibold">
            Leads <span></span>
          </h1>

          <div className="flex flex-wrap ml-5 gap-3">
            <select className="border-2 border-solid text-sm px-3 rounded-md cursor-pointer">
              <option>All City</option>
            </select>

            <select className="border-2 border-solid text-sm px-3 rounded-md cursor-pointer">
              <option>All Space</option>
            </select>

            <select className="border-2 border-solid text-sm px-3 rounded-md cursor-pointer">
              <option>All Source</option>
            </select>

            <select className="border-2 border-solid text-sm px-3 rounded-md cursor-pointer">
              <option>All Sub Source</option>
            </select>

            <select className="border-2 border-solid text-sm px-3 rounded-md cursor-pointer">
              <option>Assign to</option>
            </select>
          </div>
        </div>

        <div className="mt-3">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {[
                    "Lead Id",
                    "Department",
                    "City",
                    "Company",
                    "Mobile",
                    "Type",
                    "Seats",
                    "Status",
                    "Assign To",
                    "Collaborator",
                    "Action",
                  ]?.map((item) => (
                    <TableCell
                      key={item}
                      className="font-semibold text-sm text-nowrap"
                    >
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {[1, 2, 3, 4, 5]?.map((item) => (
                  <TableRow
                    key={item}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="text-xs text-nowrap">
                      <p>#267645</p>
                      <p>2024-09-23 22:04:54</p>
                    </TableCell>

                    <TableCell className="text-xs text-nowrap">sales</TableCell>
                    <TableCell className="text-xs text-nowrap">
                      Bangalore
                    </TableCell>
                    <TableCell className="text-xs text-nowrap">
                      <p>Company Name</p>
                      <p>Company Owner</p>
                    </TableCell>
                    <TableCell className="text-xs text-nowrap">
                      999999999
                    </TableCell>
                    <TableCell className="text-xs text-nowrap">
                      Fixed Desks
                    </TableCell>
                    <TableCell className="text-xs text-nowrap">3</TableCell>
                    <TableCell>
                      <select className="border-2 border-solid border-orange-300 bg-orange-300 cursor-pointer text-nowrap">
                        <option>Open</option>
                        <option>Working</option>
                        <option>Junk</option>
                        <option>Unqualified</option>
                        <option>Oportunity</option>
                      </select>
                    </TableCell>
                    <TableCell className="text-xs text-nowrap">Samir</TableCell>
                    <TableCell className="text-xs text-nowrap">
                      Jayant
                    </TableCell>
                    <TableCell>
                      <IconButton aria-label="more" id="long-button">
                        <MdMoreHoriz />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="flex mt-5 justify-end items-center">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default Component;
