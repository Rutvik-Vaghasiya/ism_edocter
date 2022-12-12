<table>
  <tbody>
    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Name :
        </Typography>
      </th>
      <td>
        <TextField
          id="outlined-apname"
          label="Name "
          size="small"
          error={false}
          {...register("ptnames", validetionschema.ptnames)}
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Doctor Name :
        </Typography>
      </th>
      <td>
        <TextField
          disabled
          id="outlined-drname"
          label="Doctor Name "
          size="small"
          defaultValue={doctordata.Name}
        />
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Messeges :
        </Typography>
      </th>
      <td>
        <TextField
          id="outlined-apmsg"
          label="Messwges Write Here"
          placeholder="Placeholder"
          multiline
          size="small"
          error={false}
          {...register("message", validetionschema.message)}
        />
        {errors.message && (
          <span className="text-danger">{errors.message.message}</span>
        )}
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Clinic Name :
        </Typography>
      </th>
      <td>
        <FormControl sx={{ m: 1, minWidth: 135 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Clinic Name
          </InputLabel>
          <Select
            disabled
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={clnid}
            size="small"
            placeholder="Clinic Name"
            // onChange={handleChange11("clinicnamelist")}
            autoWidth
            label="Clinic Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>{clinicData.Name} Clinic1</MenuItem>
            <MenuItem value={2}>{clinicData.Name} Clinic2</MenuItem>
            <MenuItem value={3}>{clinicData.Name} Clinic3</MenuItem>
          </Select>
        </FormControl>
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Reference :
        </Typography>
      </th>
      <td>
        <TextField
          id="outlined-aprefernce"
          label="Reference "
          size="small"
          error={false}
        />
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Complain :
        </Typography>
      </th>
      <td>
        <TextField
          id="outlined-apcomplain"
          label="Complain "
          size="small"
          error={false}
          {...register("complain", validetionschema.complain)}
        />
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Appointment Date :
        </Typography>
      </th>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            id="filled-dob"
            label="Appoinment Date"
            inputFormat="DD/MM/YYYY"
            error={false}
            size="small"
            value={values.apdate}
            onChange={handleChange11("apdate")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </tr>

    <tr>
      <th>
        <Typography variant="h6" component="h6" sx={{ textAlign: "right" }}>
          Appointment Time :
        </Typography>
      </th>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Time"
            value={values.aptime}
            onChange={handleChange11("aptime")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </tr>
    <tr>
      <td colSpan={2}></td>
    </tr>
    <tr>
      <th colSpan={2}>
        <Button
          type="submit"
          id="btnsubmit"
          variant="contained"
          component="label"
          // onClick={() => {
          //   onSubmit();
          // }}
        >
          {/* <Link to={"/patient/myappointment"}> */}
          Book Appiontment
          {/* </Link> */}
        </Button>
      </th>
    </tr>
  </tbody>
</table>;
