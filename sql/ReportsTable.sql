USE campus_accessibility;
CREATE TABLE Reports (
	Reportid int NOT NULL auto_increment,
	ReportTitle varchar(255),
    ReportDate timestamp,
    BuildingName varchar(255),
    ReportType varchar(255),
    ReportNote varchar(1024),
    PRIMARY KEY (Reportid)
);