-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "serviceLoc" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportedUsers" (
    "id" TEXT NOT NULL,
    "reportedAcc" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "others" TEXT NOT NULL DEFAULT '',
    "whatHappened" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'In Progress',

    CONSTRAINT "ReportedUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookingTime" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "bookerName" TEXT NOT NULL,
    "bookerContact" TEXT NOT NULL,
    "bookerEmail" TEXT NOT NULL DEFAULT '',
    "details" TEXT NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
