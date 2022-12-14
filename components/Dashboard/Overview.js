import axios from "apis/axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

export default function Overview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/dashboard/get-overview").then((res) => setData(res.data));
  }, []);

  return (
    <div className="row">
      <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
        <div className="card card-shadow">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5>User</h5>
              <h3 className="fw-bold">{data?.total_users || <Skeleton />}</h3>
            </div>
            <div>
              <Image src="/img/user.png" height={50} width={50} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
        <div className="card card-shadow">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5>Applications</h5>
              <h3 className="fw-bold">
                {data?.total_applications || <Skeleton />}
              </h3>
            </div>
            <div>
              <Image src="/img/application.png" height={50} width={50} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
        <div className="card card-shadow">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5>Subdivisions</h5>
              <h3 className="fw-bold">
                {data?.total_subdivisions || <Skeleton />}
              </h3>
            </div>
            <div>
              <Image src="/img/subdivision.png" height={50} width={50} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
        <div className="card card-shadow">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5>Housing Models</h5>
              <h3 className="fw-bold">
                {data?.total_housing_models || <Skeleton />}
              </h3>
            </div>
            <div>
              <Image src="/img/housing-model.png"  height={50} width={50} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
